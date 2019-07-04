#
# Backend builder image
#

FROM		node:12.5-alpine AS backend-builder

# Initialize backend development environment
WORKDIR		/home/node/backend
COPY		backend/package*.json ./
RUN			npm install --only=dev
RUN 		npm install mkdirp -D --unsafe-perm

# Inject backend source files and build
WORKDIR		/home/node/backend
COPY 		backend/src ./src
COPY		backend/webpack.config.js .
COPY		frontend/src/components/SignupForm ../frontend/src/components/SignupForm
ENV			NODE_ENV=production
RUN			npm run build



#
# Frontend builder image
#

FROM		node:12.5-alpine AS frontend-builder

# Initialize frontend development environment
WORKDIR		/home/node/frontend
COPY		frontend/package*.json ./
RUN			npm install && npm dedupe

# Inject frontend source files and build
WORKDIR		/home/node/frontend
COPY		frontend/.* ./
COPY		frontend/config-overrides.js .
COPY 		frontend/jsconfig.json .
COPY		frontend/public ./public
COPY		frontend/src ./src
RUN 		npm run build



#
# Production image
#

FROM		node:12.5-alpine

LABEL		maintainer="Artie Groove <@groove8>"

WORKDIR		/home/node/app
COPY		backend/package*.json ./
RUN			npm install --only=production && npm cache clean --force
COPY		backend/src/public ./public
COPY		--from=backend-builder /home/node/backend/build/server.js .
COPY		--from=frontend-builder /home/node/frontend/build ./public

EXPOSE		80

ENTRYPOINT	["node", "server.js"]
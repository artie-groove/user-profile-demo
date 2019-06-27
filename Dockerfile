FROM		node:12
LABEL		maintainer="Artie Groove <@groove8>"


WORKDIR		/home/node/app
COPY		backend/package*.json ./
ENV			NODE_ENV=production
RUN			npm install

COPY		backend/build/server.js ./
COPY		backend/src/public ./public
COPY		frontend/build ./public

EXPOSE		80

ENTRYPOINT	["node", "server.js"]
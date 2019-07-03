FROM		node:12 AS builder
LABEL		maintainer="Artie Groove <@groove8>"

WORKDIR		/home/node/app

COPY		backend/package*.json ./
RUN			npm install && npm dedupe

ENV			NODE_ENV=production

#COPY		backend/build/server.js ./
COPY		backend/src/public ./public
COPY		frontend/build ./public

EXPOSE		80

ENTRYPOINT	["node", "server.js"]
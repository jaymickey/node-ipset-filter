FROM node:8

WORKDIR /usr/src/app
ENV PORT=3000
COPY package*.json yarn.lock ./
COPY yarn.lock ./

RUN yarn install

COPY ./ ./

ENTRYPOINT [ "node", "server.js" ]
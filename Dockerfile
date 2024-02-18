FROM node:16.14-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./src ./src

CMD [ "npm", "run",  "dev" ]
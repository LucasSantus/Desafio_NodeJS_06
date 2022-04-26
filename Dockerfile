FROM node:14.9.0-alpine

WORKDIR /home/api

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn install

COPY . /home/api

CMD ["yarn", "dev"]
FROM node:18-alpine

WORKDIR /home/app

RUN apk add --no-cache openssl

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3001

CMD npx prisma migrate deploy && npx nest start --watch
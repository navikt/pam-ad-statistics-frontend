FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

COPY node_modules/ ./node_modules
COPY public/ ./public
COPY server/ ./server

EXPOSE 9000

CMD ["npm", "run", "start-express"]
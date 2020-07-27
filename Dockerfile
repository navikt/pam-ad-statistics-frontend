FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

COPY server/ ./server
COPY node_modules/ ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start-express"]
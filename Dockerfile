FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

COPY server.js ./
COPY app.js ./src
COPY node_modules/ ./node_modules


EXPOSE 8080

CMD ["npm", "run", "start-express"]
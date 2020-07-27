FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

COPY server.js ./ 
COPY node_modules/ ./node_modules

EXPOSE 9000

CMD ["npm", "run", "start-express"]
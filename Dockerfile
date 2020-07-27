FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

COPY server/ ./server
COPY dist/ ./dist
COPY node_modules/ ./node_modules
COPY views/ ./views
COPY images/ ./images

EXPOSE 3000

CMD ["npm", "run", "start-express"]
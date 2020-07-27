FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

COPY server.js ./
COPY --from=builder /usr/src/App.js ./
COPY node_modules/ ./node_modules


EXPOSE 8080
EXPOSE 3000

CMD ["npm", "run", "start-express"]
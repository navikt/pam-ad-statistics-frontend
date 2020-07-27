  
FROM node:10 as builder

WORKDIR /usr/src/app

COPY src/ ./src
COPY public/ ./public
COPY package.json package-lock.json server.js ./

RUN npm --version
RUN npm config set strict-ssl false
RUN npm ci
RUN npm run build
#RUN npm run build:server

# Selve imaget:
FROM navikt/node-express:12.2.0

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/public/ ./public
COPY --from=builder /usr/src/app/build/ ./build
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/package-lock.json ./
COPY --from=builder /usr/src/app/server.js ./

RUN npm config set strict-ssl false
RUN npm ci --production

EXPOSE 8080
CMD ["npm", "run", "start:server"]
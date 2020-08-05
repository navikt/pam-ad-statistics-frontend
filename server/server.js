const express = require('express');
const server = express();
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 9000;

server.set('port',port)

const pathProperties = {
    AD_CONTEXT_PATH: 'ad?adID=',
    CANDIDATE_CONTEXT_PATH: 'candidate?candidateID=',
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8080/',
    BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT || '/'
}

var allowedOrigins = 'http://localhost:3000';
server.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
        console.log("NOT ALLOWED")
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

console.log('BACKEND_ENDPOINT: ' + pathProperties.BACKEND_ENDPOINT )
console.log('BACKEND_URL:  ' + pathProperties.BACKEND_URL)


const adProxy = createProxyMiddleware('/api/ad', {
    target: `${pathProperties.BACKEND_URL}`,
    pathRewrite: {'^/api/ad': '/ad'}
});
const candidateProxy = createProxyMiddleware('/api/candidate', {
    target: `${pathProperties.BACKEND_URL}`,
    pathRewrite: {'^/api/candidate': '/candidate'},
});

server.use(adProxy);
server.use(candidateProxy);

server.use('/static', express.static(path.resolve(__dirname, '../build', 'static')));
server.use('/', express.static(path.resolve(__dirname, '../build')));
server.use(['/candidate', '/ad'], (req, res) => res.sendFile(path.resolve(__dirname, '../build', 'index.html')));

server.get(`/internal/isAlive`, (req, res) => res.sendStatus(200));
server.get(`/internal/isReady`, (req, res) => res.sendStatus(200));

server.listen(port, () => {
  console.log('Server listening on port', port);
});

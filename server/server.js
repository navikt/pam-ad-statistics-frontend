var express = require('express');
var server = express();
const port = 9000;
const fetch = require('node-fetch');
var cors = require('cors');
const path = require('path');
const proxy = require('express-http-proxy');

server.set('port',port)

const pathProperties = {
    AD_CONTEXT_PATH: 'ad?adID=',
    CANDIDATE_CONTEXT_PATH: 'candidate?candidateID=',
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8080',
    BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT || '/'
}

var allowedOrigins = 'http://localhost:3000';
server.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

console.log('BACKEND_ENDPOINT: ' + process.env.BACKEND_ENDPOINT )
console.log('BACKEND_URL:  ' + process.env.BACKEND_URL)


server.get('/api/ad/:id', function(req, res){
  const key = req.params.id
  const api_url = 'http://localhost:8080' + pathProperties.AD_CONTEXT_PATH + key

  fetch(api_url,)
      .then(res => res.json())
      .then(json => res.send(json))
})

server.get('/api/candidate/:id', function(req, res){

  const key = req.params.id
  const api_url = 'http://localhost:8080' + pathProperties.CANDIDATE_CONTEXT_PATH + key

  fetch(api_url,)
      .then(res => res.json())
      .then(json => res.send(json))
})

server.use('/', express.static(path.resolve(__dirname, 'public')));



server.use(
  '/api/ad',
  proxy(!process.env.BACKEND_URL, {
      https: process.env.NODE_ENV !== 'development',
      proxyReqPathResolver: (req) => {
        return `${BACKEND_ENDPOINT}/${req.originalUrl.split('/api/ad/').pop()}`
  
      }
  }),
);


server.get(`/internal/isAlive`, (req, res) => res.sendStatus(200));
server.get(`/internal/isReady`, (req, res) => res.sendStatus(200));

server.listen(port, () => {
  console.log('Server listening on port', port);
});
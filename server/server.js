var express = require('express');
var server = express();
const port = 9000;
const fetch = require('node-fetch');
var cors = require('cors');

server.set('port',port)

const pathProperties = {
    AD_CONTEXT_PATH: '/ad?adID=',
    CANDIDATE_CONTEXT_PATH: '/candidate?candidateID='
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

server.get('/ad/:id', function(req, res){
  const key = req.params.id
  const api_url = 'http://localhost:8080' + pathProperties.AD_CONTEXT_PATH + key

  fetch(api_url,)
      .then(res => res.json())
      .then(json => res.send(json))
})

server.get('/candidate/:id', function(req, res){

  const key = req.params.id
  const api_url = 'http://localhost:8080' + pathProperties.CANDIDATE_CONTEXT_PATH + key

  fetch(api_url,)
      .then(res => res.json())
      .then(json => res.send(json))
})

server.get('/', (req, res) => {
    res.redirect('/hallo')
});

server.get('/hallo', (req,res) => {
  res.send('Hello world')
})

server.get(`/internal/isAlive`, (req, res) => res.sendStatus(200));
server.get(`/internal/isReady`, (req, res) => res.sendStatus(200));

server.listen(port, function () {
    console.log(`ExpressJS is running on port ${port}!`);
});
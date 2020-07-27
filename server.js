var express = require('express');
var server = express();
const port = 8080;
const fetch = require('node-fetch');
var cors = require('cors');

var ad = 'json_fil'

server.set('port',port)


server.get('/', function (req, res) {
    res.send('I\'m running!');
});

server.use(cors({
    origin: 'http://localhost:3000'
  }));

server.get('/ad/:id', function(req, res){

    const key = req.params.id //not real key
    const api_url = `http://localhost:8080/ad/${key}`

    fetch(api_url,)
        .then(res => res.json())
        .then(json => res.send(json))
})    

server.get('/ad/internal/isAlive', (req, res) => res.sendStatus(200));
server.get('/ad/internal/isReady', (req, res) => res.sendStatus(200));



server.listen(port, function () {
    console.log(`ExpressJS is running on port ${port}!`);
});
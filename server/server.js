var express = require('express');
var server = express();
const port = 9000;
const fetch = require('node-fetch');
var cors = require('cors');

var ad = 'json_fil'

server.set('port',port)

const pathProperties = {
    PAM_CONTEXT_PATH: '/ad'
}

server.use(cors({
    origin: 'http://localhost:3000'
  }));

server.get('/ad/:id', function(req, res){

    const key = req.params.id //not real key
    const api_url = `http://localhost:8080${fasitProperties.PAM_CONTEXT_PATH}/${key}`

    fetch(api_url,)
        .then(res => res.json())
        .then(json => res.send(json))
})    

server.get('/', (req, res) => {
    res.redirect('/ad')
});

server.get(`${pathProperties.PAM_CONTEXT_PATH}/internal/isAlive`, (req, res) => res.sendStatus(200));
server.get(`${pathProperties.PAM_CONTEXT_PATH}/internal/isReady`, (req, res) => res.sendStatus(200));



server.listen(port, function () {
    console.log(`ExpressJS is running on port ${port}!`);
});
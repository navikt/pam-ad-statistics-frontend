
var express = require('express');
const { servicesVersion } = require('typescript');
const { json } = require('express');
var server = express();
const port = 9000;
const fetch = require('node-fetch')

var ad = 'json_fil'

server.set('port',port)


server.get('/', function (req, res) {
    res.send('I\'m running!');
});

server.get('/ad/:id', function(req, res){

    const key = req.params.id //not real key
    const api_url = `http://localhost:8080/ad/${key}`

    fetch(api_url,)
        .then(res => res.json())
        .then(json => console.log(json));
        
        res.send('JSON_FIL' + req.params.id + '  ' );
})

server.listen(port, function () {
    console.log(`ExpressJS is running on port ${port}!`);
});
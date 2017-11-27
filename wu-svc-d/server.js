var sleep = require('sleep');
var express = require('express');
var app = express();
var router = express.Router(); 
var port = process.env.PORT || 8080; 

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

router.get('/', function(req, res) {
    sleepTime = randomIntFromInterval(50,100);
    console.log('Sleeping for '+sleepTime+' ms');
    sleep.msleep(sleepTime);
    res.send(-5.0+' ');
});

app.use('/api', router);
app.listen(port);

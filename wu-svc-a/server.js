var sleep = require('sleep');
var express = require('express');
var app = express();
var router = express.Router(); 
var port = process.env.PORT || 8080; 

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

router.get('/', function(req, res) {
    var sleepTime = randomIntFromInterval(10,50);
    console.log('Sleeping for '+sleepTime+' ms');
    sleep.msleep(sleepTime);
    res.send('AUTHORIZED');
});

app.use('/api', router);
app.listen(port);

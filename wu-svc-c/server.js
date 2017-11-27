var sleep = require('sleep');
var express = require('express');
var app = express();
var router = express.Router(); 
var port = process.env.PORT || 8080; 

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

router.get('/', function(req, res) {
    sleepTime = randomIntFromInterval(100,200);
    console.log('Sleeping for '+sleepTime+' ms');
    sleep.msleep(sleepTime);
    amt = parseFloat(req.query.amt || 0.0 );
    fees = parseFloat(req.query.fees || 0.0);
    res.send(' '+(((amt * 5.00) + fees) * 0.28));
});

app.use('/api', router);
app.listen(port);

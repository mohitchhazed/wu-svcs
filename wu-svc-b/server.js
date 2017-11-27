var sleep = require('sleep');
var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 8080;

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

router.get('/', function(req, res) {
    sleepTime = randomIntFromInterval(50,150);
    console.log('Sleeping for '+sleepTime+' ms');
    sleep.msleep(sleepTime);
    randomErrorNumber = randomIntFromInterval(0,2000);
    if (randomErrorNumber == 0) {
      console.log('Randomly erroring!');
      res.status(418).send("I'm a teapot!");
    } else {
      amt = parseFloat(req.query.amt || 0.0);
      res.send(''+((amt * 5.00) * 6.80));
    }
});

app.use('/api', router);
app.listen(port);

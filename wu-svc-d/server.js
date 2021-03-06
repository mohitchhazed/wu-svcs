var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 9003;

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

router.get('/', function(req, res) {
    sleepTime = randomIntFromInterval(50,100);
    console.log('Sleeping for '+sleepTime+' ms');
    setTimeout(function() {
      randomErrorNumber = randomIntFromInterval(0,2000);
      if (randomErrorNumber == 0) {
        console.log('Randomly erroring!');
        res.status(418).send("I'm a teapot!");
      } else {
        res.send(-5.0+'');
      }
    }, sleepTime);
});

app.use('/api', router);
app.listen(port);

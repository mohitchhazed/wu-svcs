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
    setTimeout(function() {
      randomErrorNumber = randomIntFromInterval(0,2000);
      if (randomErrorNumber == 0) {
        console.log('Randomly erroring!');
        res.status(401).send("UNAUTHORIZED");
      } else {
        res.send('AUTHORIZED');
      }
    }, sleepTime);
});

app.use('/api', router);
app.listen(port);

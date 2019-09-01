var express = require('express');
var Gpio = require('onoff').Gpio;

var app = express();

var rly1 = new Gpio(27, 'out'); 

app.get('/', function (req, res) {
	
	if (rly1.readSync() === 0) { 
   res.send('status : OFF');
  }
  else {
	  res.send('status : ON'); 
  } 
   
});

app.get('/onoff', function (req, res) {
	
	if (rly1.readSync() === 0) {
	rly1.writeSync(1); // If pin is 0, write 1
	res.send('Lampu dinyalakan');
  }
  else {
   rly1.writeSync(0); // If pin is 1, write 0 
   res.send('Lampu di padamkan');
  }
    // Send 1 to switch off.
	//rly1.unexport();    // Clear pin state, free up resources
	//rly2.unexport(); 
   
});

var server = app.listen(8085, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

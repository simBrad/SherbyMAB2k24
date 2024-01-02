// var app = express();

var gpio = require('rpi-gpio'); gpio.setup(12, gpio.DIR_OUT, off);

function on() { gpio.write(12, true, function(err) { if (err) throw err; console.log('Written to pin'); }); }

function off() { gpio.write(12, false, function(err) { if (err) throw err; console.log('Written to pin'); }); }

var state = 'off';

// app.get('/', function (req, res) { res.send('Hello World!'); });

// app.get('/light', function(req, res){ res.send('The light is currently ' + state + '.'); });

// app.get('/light/on', function (req, res) { res.send('Turning the light on...'); state = 'on'; on(); });

// app.get('/light/off', function (req, res) { res.send('Turning the light off...'); state = 'off'; off(); });

// var server = app.listen(3000, function () { var host = server.address().address; var port = server.address().port;

// console.log('Example app listening at http://%s:%s', host, port); });
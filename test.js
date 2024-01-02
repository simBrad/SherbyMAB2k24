// const Raspi = require('raspi-io').RaspiIO;
// const five = require('johnny-five');
// const board = new five.Board({
//   io: new Raspi()
// });
 
// board.on('ready', () => {
 
//   // Create an Led on pin 7 (GPIO4) on P1 and strobe it on/off
//   // Optionally set the speed; defaults to 100ms
//   (new five.Led('P1-7')).strobe();
 
// });

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds
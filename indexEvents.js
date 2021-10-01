const express = require('express')
const app = express()
const EventEmitter = require('events');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

class MyEmitter extends EventEmitter {
   constructor() {
      super()
   }

   // function eventEmitted() {
   //    return new Date.now()
   // }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');

app.listen(1000, () => {
   console.log('Sever listening to Events port: ' + 1000)
})
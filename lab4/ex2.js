const events = require('events').EventEmitter;
const emitter = new events.EventEmitter();

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])

emitter.on('convert', () => {
    // do something
    buf.forEach(element => console.log(element));
})

emitter.emit('convert');
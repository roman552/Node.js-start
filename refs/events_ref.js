const EventEmitter = require('events')

// class Logger extends EventEmitter {
//     log(message) {
//         this.emit('message', `${message} ${Date.now()}`)
//     }
// }

// const logger = new Logger()

// logger.on('message', data => {
//     console.log(data);
// })

// logger.log('First')
// logger.log('Second')
// logger.log('Third')

class Logger2 extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger2 = new Logger2()

logger2.on('message', data => {
    console.log(data);
})

logger2.log('hello')
logger2.log('world')
logger2.log('!')
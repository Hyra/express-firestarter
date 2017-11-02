require('dotenv').config();

// setInterval(() => {
//     console.log(Math.random() * 1000)

//     queue.createJob('testjob', {
//     })
//     .removeOnComplete(true)
//     .attempts(3)
//     .ttl(10000)
//     .save(function(err) {
//         console.log(`Added job`)
//     })

// }, 1666)

// var kue = require('kue'),
//     queue = kue.createQueue({
//         redis: process.env.REDIS_URL
//     })

// queue.process('testjob', function(job, done) {
//     console.log(job.id)
//     done()
// });

if (production.env.NODE_ENV === 'production') {
    var socket = require('socket.io-client');
} else {
    var socket = require('socket.io-client')('http://localhost:3000');
}

setInterval(() => {
  console.log('emiting')
  socket.emit('sample-message', {
    room: '',
    data: 'Hello from worker'
  });
}, 1000);

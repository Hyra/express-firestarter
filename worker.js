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

var socket = require('socket.io-client')(process.env.SOCKET_URL)

setInterval(() => {
  console.log('emiting', process.env.NODE_ENV)
  socket.emit('sample-message', {
    room: '',
    data: 'Hello from worker'
  });
}, 1000);

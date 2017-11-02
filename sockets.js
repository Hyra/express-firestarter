exports = module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('SOCKET.JS', 'A user connected')
        socket.on('sample-message', function (data) {
            console.log('RECEVIED FROM WORKER', data)
            io.of('/' + data.room).emit('newpage', {
                title: Math.ceil(Math.random() * 1020191)
            })
        })
    })
}
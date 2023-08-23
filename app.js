const express = require('express');
const {app, io, server} = require('./init')
const postRoutes = require('./routes/postRoutes');
const db = require('./utils/database')
// const socketIO = require('socket.io');
// const http = require('http');
// const PORT = 3000

// let app = express();
// let server = http.createServer(app)
// let io = socketIO(server)
app.use(express.json());
app.use('/postRoute', postRoutes);


io.on('connection', (socket) => {
    console.log("New User Connected")

    socket.emit('newMessage', {
        from:'jen@mds',
        text:'hepppp',
        createdAt:123
      });

      socket.on('add_user', (data) => {
        console.log(data['username']);
    })

})

app.get('/hello', (req, res) => {
    io.emit('newMessage', {
        from:'arshman@codeminer.co',
        text:'Sent from Website',
        createdAt:123
      });
    res.status(200).json({
        success: true,
        msg: "hello world"
    })
}) 


server.listen(3000);
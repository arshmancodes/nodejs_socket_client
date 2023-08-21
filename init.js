const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const PORT = 3000

let app = express();
let server = http.createServer(app)
let io = socketIO(server)


module.exports = {app, io, server};

"use strict"

require('dotenv').config()
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())

let gameStatus = 'start';
let playerName = ''
let isRandomCountdown = 0;
let isClick = false;
// let players = [];
let isSubmitted = false;
let playerTotal = 2;
let gameLog = [];
let guestResult = [];
let winner = [];

io.on('connection', (socket) => {
    console.log('New connection is establised');
    socket.on('player-login', (player)=> {
        console.log('Player has logged in')
        gameLog.push();

    });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});

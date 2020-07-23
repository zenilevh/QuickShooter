"use strict"

require('dotenv').config()
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())

let gameLog = [];
let guestResult = [];
let winner = [];
let room = [];
let shooters = [];

io.on('connection', (socket) => {
  console.log('New connection is establised');
  socket.on('player-login', (player)=> {
    console.log(`${player.name} has logged in`);
    gameLog.push(`${player.name} has logged in`);
    console.log(gameLog)
    room.push(player.name);
    console.log(room)
    
    if (room.length == 2) {
      console.log('game-start')
      // let randomInterval = Math.floor(Math.random()*5)+1;
      // randomInterval *=1000;
      // console.log("Random number: " + randomInterval);
      // socket.broadcast.emit('game-start', { value: randomInterval });
    }
  });
  
  // socket.on('shooter-submit', (data) => {
  //   let message = `${data.playerName}'s shooter is ${data.shooterResult}`;

  //   console.log(message)

  //   if (data.shooterResult != '') {
  //     message += '';
  //   } else {
  //     winner.push(data.playerName);
  //   }
  //   gameLog.push(message);
  //   shooters.push(data);
  // });

});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});

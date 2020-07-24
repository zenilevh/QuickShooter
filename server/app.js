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

// let randomInterval = Math.floor(Math.random()*5)+1;
// randomInterval *=1000;

io.on('connection', (socket) => {
  console.log('New connection is establised');
  socket.on('player-login', (player)=> {
    console.log(`${player.name} has logged in`);
    gameLog.push(`${player.name} has logged in`);
    console.log(gameLog)
    room.push(player.name);
    console.log(room)
    
    if (room.length == 2) {
      io.emit('game-start', { value: 3000 });
      console.log('game-start');
      let count = 3;

      let timer = setInterval(() => {
    
        if (count > -1 && count <= 3) {
          io.emit('start-countdown', count);
        }
        count--

      }, 1000);
      
      console.log('waktu:', count);
      
      if (count === 0) {
        clearInterval(timer);
      }
    }
  
  });

  let isClickButton = false;
  // let trueShooter = [];

  socket.on('flag', () => {
    // trueShooter.push(player);
    // console.log(trueShooter)
    isClickButton = true;
  });

  socket.on('shooter', (payload) => {
    console.log(payload)
    if (isClickButton === true) {
      io.emit('game-end', payload)
    } else {
      io.emit('game-end', payload)
    }
    
  });
  // socket.on('winPlayer', (data) => {
  //   console.log(data, '<< winner player')
  // })
  
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


http.listen(port, () => {
  console.log(`listening on *:${port}`);
});

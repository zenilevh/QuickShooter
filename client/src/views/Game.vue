<template>
  <div class="container bg-white rounded-lg">
    <h1 class="text-center" id="countdown">{{timer}}</h1>
    <button @click.prevent="action" class="btn btn-danger" id="buthull">
      <h1 class="display-4">PREES THE BUTTON</h1>
    </button>
  </div>
</template>

<script>
import io from 'socket.io-client';
const socket = io('http://localhost:3000')

export default {
  data() {
    return {
      timer: null,
      isClick: false,
      clicked: false,
    }
  },
  methods: {
    action() {
      console.log('JEBRET')
      this.clicked = true
      socket.emit('shooter', localStorage.current_player)


    }
  },
  computed: {
    timers() {
      console.log("Helloo from computed")
      
    }
  },
  created() {
    console.log("Helloo from created")

    socket.on('start-countdown', (data) => {
      this.timer = data
      console.log('masuk ga ni?')
      if(data === 0) {
        this.isClick = true;
        socket.emit('flag')
        
      }
      // if (this.isClick === false && this.clicked === true) {
      //   console.log('masuk?')
      //   socket.emit("losePlayer", localStorage.current_player);
      // } else if (this.timer === 0 && this.clicked === true) {
      //   console.log('masuk???')
      //   socket.emit("winPlayer", localStorage.current_player);
      // }
    });
    socket.on('game-end', (winner)=> {
      console.log(winner)
      this.$store.commit('setWinner', winner)
    })
  }
};
</script>

<style scoped>
#countdown {
  font-size: 110px;
  height: 300px;
  width: 700px;
  margin-left: 19%;
}
.container {
  height: 700px;
}
button {
  height: 300px;
  width: 700px;

  margin-top: 6%;
  margin-left: 19%;
}
</style>>

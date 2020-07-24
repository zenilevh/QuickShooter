<template>
  <div class="container border rounded-lg shadow p-3 mb-5 bg-white rounded" id="waiting">
    <h1 class="text-center display-5">Please Wait A Moment</h1>
  </div>
</template>


<script>
import io from 'socket.io-client';
const socket = io('http://localhost:3000')

export default {
  data() {
    return {

    };
  },
  created() {
    
    socket.on('game-start', (number) => {
      console.log('This is concole log METHOD WAITING.vue', number.value)
      this.$store.dispatch('setRandomCountdown', number.value)
    })
  },
  // mounted() {
  //   this.socket = io.connect('http://localhost:3000')

  //   this.socket.on('game-start', function(number){
  //     this.$store.dispatch('setRandomCountdown', number)
  //   })
  //   console.log('This is concole log METHOD WAITING.vue', number)
  // }
};
</script>

<style>
#waiting {
  width: 500px;
  opacity: 0.7;
}
</style>

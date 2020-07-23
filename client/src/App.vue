<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>


<script>
import Navbar from "./components/Navbar.vue";
import io from 'socket.io-client';
const socket = io('http://localhost:3000')

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    Navbar,
  },
  created () {
    socket.on('game-start', function(number){
      this.$store.commit('setRandomCountdown', number)
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

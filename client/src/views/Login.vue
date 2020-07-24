<template>
    <div>
        <div class="login">
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <img src="https://image.freepik.com/free-vector/cowboy-head-mascot_9645-506.jpg" style="margin-left: 28%; width: 40%; height: 30%;">
                        <div class="card-header">
                            <h3 style="font-family: 'Bungee Shade', cursive;">Insert Your Name</h3>
                        </div>
                        <div class="card-body">
                        <form v-on:submit.prevent="playerLogin">
                            <div class="input-group form-group">
                            <input type="text" class="form-control" placeholder="username" v-model="playerName" required>
                            </div>
                            <br><br>
                            <div class="form-group">
                            <input type="submit" value="Go" class="btn login_btn">
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <audio controls autoplay hidden>
            <source src="../assets/opening.mp3" type="audio/ogg" />
        </audio>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import io from 'socket.io-client';
const socket = io('http://localhost:3000')

export default {
  name: 'Login',
  data() {
    return {
        playerName: '',
    };
  },
  methods: {
    playerLogin () {
        this.$store.commit('playerLogin', { name: this.playerName })
        socket.emit('player-login', {name: this.playerName})
        this.playerName = ''
    }
  },
};
</script>

<style scoped>
.login{
position: fixed;
background-size: cover;
height: 100%;
width: 100%;
margin: auto;
margin-top: 10px;
font-family: 'Numans', sans-serif;
z-index: 998;
}
.container{
height: 100%;
align-content: center;
}
.card{
height: 370px;
margin: auto;
margin-bottom: auto;
width: 400px;
background-color:#162123 !important;
}
.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}
.social_icon span:hover{
color: white;
cursor: pointer;
}
.card-header h3{
color: white;
}
.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}
input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;
}
.login_btn{
color: black;
background-color: #717375;
width: 100%;
}
.login_btn:hover{
color: black;
background-color: white;
}
.links{
color: white;
}
.links a{
margin-left: 4px;
}
</style>

<template>
    <div style="background-image: '../assets/samuel-zeller-medium-b832fe04.jpg'">
        <div class="login">
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <img src="../assets/bionicflyingfox.gif" style="width: 100%; height: 50%;">
                        <div class="card-header">
                            <h3 style="font-family: 'Bungee Shade', cursive;">Insert Your Name</h3>
                        </div>
                        <div class="card-body">
                        <form>
                            <div class="input-group form-group">
                            <input type="text" class="form-control" placeholder="username" v-model="username">
                            </div>
                            <br><br>
                            <div class="form-group">
                            <input type="submit" value="Go" class="btn login_btn" @click.prevent="enter">
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Login',
  data() {
    return {
        username: '',
    };
  },
  methods: {
    enter () {

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

<template>
  <div
    class="container border rounded-lg shadow p-3 mb-5 bg-white rounded"
    style="width: 700px"
    id="WIN"
  >
    <h1 class="text-center display-5">{{$store.state.winner}}</h1>
    <h1 class="text-center display-5">{{$store.state.loser}}</h1>
     <audio controls autoplay hidden>
       <source src="../assets/winning.mp3" type="audio/ogg" />
     </audio>
  </div>
</template>


<script>
export default {
  data() {
    return {

    };
  },

};
</script>

<style></style>

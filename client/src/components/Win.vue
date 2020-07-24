<template>
  <div
    class="container border rounded-lg shadow p-3 mb-5 bg-white rounded"
    style="width: 700px"
    id="WIN"
  >
    <h1 class="text-center display-5">{{$store.state.winner}} is the Winner!</h1>
    <button class="btn btn-secondary" @click.prevent="reload()">Play Again!</button>
    <audio controls autoplay hidden>
      <source src="../assets/winning.mp3" type="audio/ogg" />
    </audio>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    reload() {
      this.$store.commit("RELOAD_GAME");
    },
  },
};
</script>

<style></style>

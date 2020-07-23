<template>
  <div class="home">
    <div class="container border rounded-lg shadow p-3 mb-5 bg-white rounded">
      <div class="media">
        <img
          id="media"
          src="https://thumbs.dreamstime.com/b/duel-cowboy-desert-illustration-103523004.jpg"
          class="align-self-start mr-3"
        />
        <div class="media-body">
          <h5 class="mt-0">How To Play</h5>
          <ul>
            <li>Pick Available room</li>
            <li>if you all room not available, please create your own room</li>
            <li>you already meet your opponent once you countdown started</li>
            <li>you need to wait the "Right" Moment to click the button</li>
            <li>this game need precision and patience to play</li>
            <li>if you click before the sign show, you lose</li>
            <li>if you not fast enough to click you lose</li>
            <li>after the sign show up, player only have maximum time limit 5 second to press the button or match will draw</li>
            <li>you will win if you click the button before time limit, and after the sign show up</li>
            <li>and remember who fast enough, will be the winner</li>
          </ul>
        </div>
      </div>
    </div>
    <Table></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "../components/Table.vue";

export default {
  name: "Home",
  components: {
    Table,
  },
};
</script>


<style >
#quick {
  font-family: "Bungee Shade", cursive;
  color: rgb(105, 80, 80);
}
#media {
  width: 100px;
}
</style>
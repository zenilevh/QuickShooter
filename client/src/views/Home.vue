<template>
  <div class="home">
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
</style>
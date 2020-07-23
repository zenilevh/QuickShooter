<template>
  <div class="container border rounded-lg shadow p-3 mb-5 bg-white rounded">
    <button type="button" class="btn btn-success mt-2">Create Room</button>
    <table class="table table-striped table-dark mt-3 text-center">
      <thead>
        <tr>
          <th scope="col">Room Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Larry</th>
          <td>
            <button class="btn btn-success">Join</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>
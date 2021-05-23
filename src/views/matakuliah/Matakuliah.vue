<template>
  <div class="matakuliah">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class = "my-3">
    <router-link class="btn btn-primary" to="/createfriends">Tambah Data Matakuliah</router-link>
    <router-link class="btn btn-danger" to="/editfriends">Edit Data Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Id</th>
      <th scope="col">Matakuliah</th>
      <th scope="col">SKS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2018114037</td>
      <td>Pemrograman</td>
      <td>4</td>
      <td>

      </td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
export default {
  name: 'Matakuliah',
  components: {
    Slider,
  },

};
</script>
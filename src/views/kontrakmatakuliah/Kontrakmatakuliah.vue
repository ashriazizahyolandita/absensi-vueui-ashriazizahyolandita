<template>
  <div class="Kontrakmatakuliah">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class = "my-3">
    <router-link class="btn btn-primary" to="/createkontrakmatakuliah">Tambah Data</router-link>
    <router-link class="btn btn-danger" to="/editkontrakmatakuliah">Edit Data</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rizki Amirullah</td>
      <td>6</td>
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
  name: 'Kontrakmatakuliah',
  components: {
    Slider,
  },

};
</script>
<template>
  <div class="Jadwal">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class = "my-3">
    <router-link class="btn btn-primary" to="/createfriends">Tambah Jadwal Mahasiswa</router-link>
    <router-link class="btn btn-danger" to="/editjadwal">Edit Jadwal Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Id</th>
      <th scope="col">Jadwal</th>
     <th scope="col">Matakuliah</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2018117037</td>
      <td>09.00</td>
      <td> Ekonomi Digital Baru </td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
export default {
  name: 'Jadwal',
  components: {
    Slider,
  },

};
</script>
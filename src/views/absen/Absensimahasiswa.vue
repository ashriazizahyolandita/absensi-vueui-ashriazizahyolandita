<template>
  <div class="absensimahasiswa">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class = "my-3">
    <router-link class="btn btn-primary" to="/createabsen">Tambah Absensi Mahasiswa</router-link>
    <router-link class="btn btn-danger" to="/editabsen">Edit Absensi Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Id</th>
      <th scope="col">Waktu Absen</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Matakuliah</th>
      <th scope="col">Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2018114037</td>
      <td>07.00</td>
      <td>Ashri Azizah Yolandita</td>
      <td>Pemrograman</td>
      <td>Hadir</td>
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
  name: 'Absensimahasiswa',
  components: {
    Slider,
  },

};
</script>
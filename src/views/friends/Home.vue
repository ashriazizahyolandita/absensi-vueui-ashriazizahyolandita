<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createfriends">Tambah Data Mahasiswa</router-link>
    <router-link class="btn btn-danger" to="/editfriends">Edit Data Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Id</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Alamat</th>
      <th scope="col">No Tlp</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(friends, index) in friends" :key="index">
      <td>{{ friends.id}}</td>
      <td>{{ friends.nama_mahasiswa}}</td>
      <td>{{ friends.alamat}}</td>
      <td>{{ friends.no_tlp}}</td>
      <td>{{ friends.email}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Slider
  },
  setup(){
    let friends = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/friends')
      .then(response => {
        friends.value = response.data.data
    })
    .catch(error =>{
      console.log(error)
    })
    })
    return {
      friends
    }
  }
};
</script>
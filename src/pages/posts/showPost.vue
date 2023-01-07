<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <div class="card">
    <p class="nav-link card-header">{{ post.title }}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> {{ post.body }} </li>
    </ul>
    <div class="card-footer">
      <button class="btn btn-sm btn-danger" @click="deletePost">Delete</button>
      <router-link class="btn btn-sm btn-dark ms-4" :to="{ name: 'editPost' , params: { id: post.id } }">Edit</router-link>
    </div>
  </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const post = ref({})
const loading = ref(true)
const route = useRoute()

axios
  .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then(function (response) {
    post.value = response.data
    loading.value = false
  })
  .catch(function (error) {
    console.log(error)
  })

function deletePost () {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function () {
      Swal.fire({
        title: 'Thanks!',
        text: `Post ${route.params.id} Deleted Successfully`,
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    })
    .catch(function (error) {
      console.log(error)
    })
}

</script>

<style scoped>

</style>

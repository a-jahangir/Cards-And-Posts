<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <div class="card">
    <router-link class="nav-link card-header" :to="{ name: 'postId', params: { id: post.id } }">{{ post.title }}</router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> {{ post.body }} </li>
    </ul>
    <div class="card-footer">
      <router-link class="btn btn-sm btn-danger" :to="{ name: 'posts' }">Delete</router-link>
      <router-link class="btn btn-sm btn-dark ms-4" :to="{ name: 'posts' }">Edit</router-link>
    </div>
  </div>
  </div>
</template>

<script setup>
import axios from 'axios'
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

</script>

<style scoped>

</style>

<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4" v-for="user in users" :key="user.id">
    <userCardView :user="user" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import userCardView from '@/components/users/userCardView.vue'

const users = ref([])
const loading = ref(true)

axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    users.value = response.data
    loading.value = false
  })
  .catch(function (error) {
    console.log(error)
  })

</script>

<style scoped>

</style>

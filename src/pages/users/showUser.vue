<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <userCardView :user="user" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import userCardView from '@/components/users/userCardView.vue'
import { useRoute } from 'vue-router'

const user = ref({})
const loading = ref(true)
const route = useRoute()

axios
  .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  .then(function (response) {
    user.value = response.data
    loading.value = false
  })
  .catch(function (error) {
    console.log(error)
  })

</script>

<style scoped>

</style>

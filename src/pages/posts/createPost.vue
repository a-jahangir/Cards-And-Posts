<template>
    <div class="col-md-6">
        <h2 class="mb-5">Create Post :</h2>
        <form @submit.prevent="validate">
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" v-model.lazy.trim="form.title">
                <div class="form-text text-danger">{{ form.titleError }}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Body</label>
                <textarea class="form-control" v-model.lazy.trim="form.body"></textarea>
                <div class="form-text text-danger">{{ form.bodyError }}</div>
            </div>
            <button type="submit" class="btn btn-dark" :disabled="loading">
              <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
              Create Post
            </button>
        </form>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import axios from 'axios'
import { reactive, ref } from 'vue'

const form = reactive({
  title: '',
  titleError: '',
  body: '',
  bodyError: ''
})
const loading = ref(false)

function validate () {
  if (form.title === '') {
    form.titleError = 'Title is required'
  } else {
    form.titleError = ''
  }
  if (form.body === '') {
    form.bodyError = 'Body is required'
  } else {
    form.bodyError = ''
  }
  if (form.title !== '' && form.body !== '') {
    createPost()
  }
}

function createPost () {
  loading.value = true
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: form.title,
    body: form.body,
    userId: 1
  })
    .then(function () {
      loading.value = false
      Swal.fire({
        title: 'Thanks!',
        text: 'Post Created Successfully',
        icon: 'success',
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

<template>
    <div class="col-md-6">
        <h2 class="mb-5">Edit Post :</h2>
        <form @submit.prevent="validate">
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" v-model.lazy.trim="form.title">
                <div class="form-text text-danger">{{ form.titleError }}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Body</label>
                <textarea class="form-control" rows="6" v-model.lazy.trim="form.body"></textarea>
                <div class="form-text text-danger">{{ form.bodyError }}</div>
            </div>
            <button type="submit" class="btn btn-dark" :disabled="loading">
              <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
              Edit Post
            </button>
        </form>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const loading = ref(false)
const route = useRoute()
const form = reactive({
  title: '',
  titleError: '',
  body: '',
  bodyError: ''
})

axios
  .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then(function (response) {
    form.title = response.data.title
    form.body = response.data.body
  })
  .catch(function (error) {
    console.log(error)
  })

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
    updatePost()
  }
}

function updatePost () {
  loading.value = true
  axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
    id: route.params.id,
    title: form.title,
    body: form.body,
    userId: 1
  })
    .then(function () {
      loading.value = false
      Swal.fire({
        title: 'Thanks!',
        text: 'Post Updated Successfully',
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

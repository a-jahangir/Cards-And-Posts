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
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const form = reactive({
  title: '',
  titleError: '',
  body: '',
  bodyError: ''
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
    createPost()
  }
}

function createPost () {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: form.title,
    body: form.body,
    userId: 1
  })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

</script>

<style scoped>

</style>

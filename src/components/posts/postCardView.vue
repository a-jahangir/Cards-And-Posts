<template>
  <div class="card">
    <router-link class="nav-link card-header" :to="{ name: 'postId', params: { id: post.id } }">{{ post.title }}</router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> {{ post.body }} </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  post: Object
})

</script>

<style>

</style>

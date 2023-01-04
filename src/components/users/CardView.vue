<template>
  <div class="card">
    <router-link class="nav-link card-header" :to="{ name: 'userId' , params: { id: user.id } }">{{ user.name }}</router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Username : {{ user.username }} </li>
      <li class="list-group-item"> Email : {{ user.email }} </li>
      <li class="list-group-item"> Phone : {{ user.phone }} </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  user: Object
})

</script>

<style>

</style>

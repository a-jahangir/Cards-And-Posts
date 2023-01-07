<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>this page is just for test and learning vuejs . <br/> for check fake api users and posts click on buttons</p>
          <router-link class="btn btn-dark" :to="{ name: 'users' }">Users</router-link>
          <router-link class="btn btn-light ms-4" :to="{ name: 'posts' }">Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>

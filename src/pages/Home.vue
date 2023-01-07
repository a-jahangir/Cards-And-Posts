<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad corrupti blanditiis. Totam aspernatur
          omnis cupiditate, molestias quibusdam, aliquid laboriosam in rerum iusto doloremque accusamus ex nesciunt
          ipsam harum illo, numquam laudantium iure alias voluptatibus at repellat velit nihil consequuntur?</p>
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

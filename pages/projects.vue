<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <div class="container">
      <br>
      <hr>
      <br>
      <ul class="grid grid-cols-3 gap-8 mt-8">
        <ProjectPreview v-for="project in projects" :key="project.slug" :project="project"></ProjectPreview>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const projects = await $content('projects')
            .sortBy('createdAt', 'desc')
            .fetch();
        return { projects }
    },
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 30px auto;
  display: table;
  width: 100%;
}

ul {
    list-style-type: none;
}
</style>
<template>
  <div class="container">
    <div>
      <CustomNavbar></CustomNavbar>
      <project>
        <br />
        <br />
        <h1>{{ project.title }}</h1>
        <hr />
        <nuxt-content :document="project" />
        <br />
        <hr />
        <p class="date">{{ formatDate(project.updatedAt) }}</p>
      </project>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const project = await $content('projects', params.slug).fetch();
    return { project }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
}
</script>

<style>
.container > div {
  max-width: 800px;
  margin: 30px auto;
  display: table;
  width: 100%;
}

nav .container {
  max-width: 100%;
  padding: 0;
}

h1 {
  font-size: 20px;
  font-family: 'lato';
}

p {
  font-size: 18px;
  font-family: 'lato';
}

.date {
  font-size: 14px;
  font-family: 'lato';
  float: right;
}

ul > li {
  font-size: 18px;
  font-family: 'lato';
}
</style>
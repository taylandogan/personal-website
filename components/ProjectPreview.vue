<template>
  <li>
    <a :href="`/project/${project.slug}`">
      {{ project.title }}
    </a>
    <p>{{ project.description }}</p>
    <p class="tag"> {{ formatDate(project.updatedAt) }} &ensp;/&ensp; {{ project.tags }} </p>
    <hr>
  </li>
</template>

<script>
export default {
  props: {
    project: Object,
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
p {
  font-size: 16px;
  font-family: 'lato';
}

p.tag {
  font-size: 12px;
  font-family: 'lato';
  align-content: right;
}

a {
  font-size: 20px;
  font-family: 'lato';
  color: #1f9102;
}
</style>
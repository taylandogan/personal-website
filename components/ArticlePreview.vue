<template>
  <li>
    <a :href="`/blog/${article.slug}`">
      {{ article.title }}
    </a>
    <p>{{ article.description }}</p>
    <p class="tag"> {{ formatDate(article.updatedAt) }} &ensp;/&ensp; {{ article.tags }} </p>
    <hr>
  </li>
</template>

<script>
export default {
  props: {
    article: Object,
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
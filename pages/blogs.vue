<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <div class="container">
      <br>
      <br>
      <ul class="grid grid-cols-3 gap-8 mt-8">
        <hr/>
        <ArticlePreview v-for="article in articles" :key="article.slug" :article="article"></ArticlePreview>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const articles = await $content('articles')
            .sortBy('createdAt', 'desc')
            .fetch();
        return { articles }
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

li {
  margin: 30px 0px 30px 0px;
}

</style>
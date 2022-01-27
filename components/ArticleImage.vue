<template>
  <div class="image_container"> 
    <br>
    <img :src="imgSrc()" :alt="alt" class="article-image" />
    <p class="image_alt"> {{alt}}  </p>
    <br>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style>
.image_container {
    margin:0; 
    position:relative;
}

p.image_alt {
    font-size: 15px;
    font-family: 'lato';
    font-style: italic;
}
</style>
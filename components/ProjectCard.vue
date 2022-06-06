<template>
  <div class="project-card">
    <a :href="link">
      <div class="project-image">
        <img :src="imgSrc()"/>
      </div>
      <div>
        <p class="project-name">{{ name }} <span v-if="id">#{{ id }}</span></p>
        <p v-if="description" class="project-description">{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: null
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    img: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ""
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.img}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Lato';
  src: local('Lato'),
    url('~/assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
}

.project-card {
  background-color: #ffffff;
  color: #8BACD9;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 25px 50px 0 rgba(0,0,0,0.1);
}

.project-image {
    border-radius: 8px;
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.project-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 0 16px 0;
}

.project-name {
    color: #1f9102;
    font-weight: bold;
    cursor: pointer;
}

.project-description {
    color: #000000;
}

</style>

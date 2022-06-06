<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <div class="container">
      <br>
      <br>
       <ul class="grid grid-cols-3 gap-8 mt-8">
        <hr/>
        <vue-masonry-wall :items="items" :options="options" :ssr="{columns: 2}">
          <template v-slot:default="{ item }">
            <div :key="item.id" class="item">
              <ProjectCard :id="item.id" :name="item.title" :img="item.img" :description="item.description" :link="item.link"/>
            </div>
          </template>
        </vue-masonry-wall>
      </ul>
    </div>
  </div>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import ProjectCard from '../components/ProjectCard';

const items = []
const options = {
  width: 350,
  padding: {
    default: 10,
    1: 4,
    2: 6
  },
}

export default {
  components: {
    VueMasonryWall,
    ProjectCard
  },

  data() {
    return {
      items,
      options,
    };
  },

  mounted() {
    this.fetchItems()
  },

  methods: {
    async fetchItems() {
      const projects = await this.$content('projects')
        .sortBy('createdAt', 'desc')
        .fetch();

      for (let i = 0; i < projects.length; i++) {
        this.items.push({
          id: i,
          title: projects[i].title,
          img: projects[i].img,
          description: projects[i].description,
          link: `/project/${projects[i].slug}`
        })
      }
    }
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
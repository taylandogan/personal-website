<template>
  <div class="app">
    <CustomNavbar></CustomNavbar>
    <CustomHeader></CustomHeader>
  </div>
</template>

<script>

import Vue from 'vue'
import CustomNavbar from '../components/CustomNavbar';
import CustomHeader from '../components/CustomHeader';


export default Vue.extend({
  name: 'IndexPage',
  components: {
    CustomNavbar,
    CustomHeader
  },
})
</script>

<style>
@font-face {
  font-family: 'Lato';
  src: local('Lato'),
    url('~/assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
}
</style>
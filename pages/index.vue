<template>
  <div class="app">
    <CustomNavbar></CustomNavbar>
    <CustomHeader></CustomHeader>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import CustomNavbar from './components/CustomNavbar';
import CustomHeader from './components/CustomHeader';

Vue.use(Vuesax)

export default {
  name: 'IndexPage',
  components: {
    CustomNavbar,
    CustomHeader
  },
};
</script>

<style>
@font-face {
  font-family: 'Lato';
  src: local('Lato'),
    url('~assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
}
</style>
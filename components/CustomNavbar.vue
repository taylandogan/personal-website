<template>
  <nav>
    <div class="container">
      <a class="logo" href="/">
        taylan
        <span class="lite">dogan</span>
      </a>

      <div class="links">
        <a href="#" style="margin: 0px 10px 0px 10px">projects</a>
        <span>|</span>
        <a href="/blogs/" style="margin: 0px 10px 0px 10px">blog</a>
        <span>|</span>
        <a href="/taylan_cv.pdf" style="margin-left: 10px" target="_blank">resume</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CustomNavbar'
};
</script>

<style>
@font-face {
  font-family: 'Lato';
  src: local('Lato'),
    url('~/assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
}

nav {
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 0;
}

nav .container {
  max-width: 1200px;
  margin: 0 auto;
  display: table;
  width: 100%;
  padding: 0 50px;
}

nav .container a.logo {
  display: inline-block;
  cursor: pointer;
  font-family: 'lato';
  letter-spacing: 1px;
  font-size: 22px;
  color: black;
}

nav .container a {
  transition: 0.3s all 0s ease;
}

nav .container .links {
  text-align: right;
  font-family: 'lato';
  height: auto;
}

nav .container .links a {
  font-family: 'lato';
  font-size: 22px;
  color: black;
  letter-spacing: 2px;
}

nav .container > div {
  display: table-cell;
  width: 50%;
  vertical-align: middle;
}

nav .container .links > a:last-child {
  margin-right: 0;
}

.lite {
  opacity: 0.3;
}

a {
  text-decoration: none;
}
</style>
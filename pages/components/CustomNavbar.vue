<template>
  <nav>
    <div class="container">
      <a class="logo">
        taylan
        <span class="lite">dogan</span>
      </a>

      <div class="links">
        <a href="#" style="margin-right: 10px">blog (soon)</a>
        <span>|</span>
        <a href="/taylan_resume.pdf" style="margin-left: 10px" target="_blank">resume</a>
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
</style>
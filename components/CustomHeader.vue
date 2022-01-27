<template>
  <div class="container">
    <div>
      <div class="intro-body">
        <br />
        <div class="name">Hey, I am Taylan :)</div>
        <div class="subtitle">DEVELOPER</div>
        <br />
        <p
          class="intro"
        >A developer living in Amsterdam with broad interests including deep learning, game design, data compression and bioinformatics.</p>
        <br />
        <hr />
        <br />
      </div>

      <div class="profile-img">
        <img src="~/assets/images/pp.jpeg" class="img-responsive" width="150px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader'
};
</script>

<style scoped>
.container > div {
  max-width: 1200px;
  margin: 30px auto;
  display: table;
  padding: 0 50px;
  width: 100%;
}

.container > div > div {
  display: table-cell;
  width: 50%;
  vertical-align: middle;
}

.intro-body .name {
  font-family: 'lato';
  font-size: 24px;
  letter-spacing: 1.5px;
  color: #1f9102;
}

.intro-body .subtitle {
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: 'lato';
  color: #89c979;
  font-size: 18px;
  letter-spacing: 2px;
}

.intro-body .intro {
  color: black;
}

.container .profile-img img {
  float: right;
  border-radius: 50%;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  margin-right: 10%;
}

img {
  vertical-align: middle;
  border: 0;
}

p.intro {
  line-height: 26px;
}

p {
  font-size: 18px;
  font-family: 'lato';
}

hr {
  opacity: 0.4;
}
</style>
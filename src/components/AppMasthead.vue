<template>
  <div class="mastheadcontain">
    <h1>VS Code can do that?!</h1>
    <h3>All the best things about Visual Studio Code that nobody ever bothered to tell you</h3>
    <div class="bottomtag">
      <h4>Hosted on <a href="">Azure App Service</a></h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mastheadcontain {
  width: 100vw;
  height: 250px;
  background: url('./../assets/feature-logo.png') bottom right no-repeat,
    #212121;
  background-size: 70%;
  padding: 12vmin 0;
  position: relative;
}

h1 {
  font-size: 40px;
  padding-left: 50px;
}

h3 {
  font-weight: normal;
  margin-top: 40px;
  width: 50%;
  padding-left: 50px;
}

.bottomtag {
  margin-top: 50px;
  float: right;
  padding-right: 70px;
}

h4 {
  font-family: 'AvenirNextLTW01-Italic', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  margin: 5px;
  text-align: right;
}
</style>
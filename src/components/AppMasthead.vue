<template>
  <div class="mastheadcontain">
    <h1>VS Code can do that?!</h1>
    <h3>All the best things about Visual Studio Code that nobody ever bothered to tell you</h3>
    <div class="mastheadbottom">
      <!-- 
        <div class="videoplaylist">
        <h5>VS Code Release Highlights Video:</h5>
        <iframe height="140px" src="https://www.youtube.com/embed/videoseries?list=PLG8WGLcszzgWgVzAS1IS2sJJ5ewdb-DEo&showinfo=0" allowfullscreen webkitallowfullscreen mozallowfullscreen style="position: relative; top: 0px; right: 0px; bottom: 0px; left: 0px;"  frameborder=0></iframe>
      </div>
        -->
      <div class="rssmessage">
        <h4>Hosted on <a href="https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=devcloud-22498-buhollan">Azure Static Web Apps</a></h4>
        <h4>Brought to you by <a href="https://twitter.com/burkeholland" target="_blank">Burke Holland</a> and <a href="https://twitter.com/sarah_edo" target="_blank">Sarah Drasner</a></h4>
        <a href="feed.xml" class="rssbutton">
          <button><i class="icon icon-rss"></i>RSS Feed</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mastheadcontain {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 280px;
  background: url('./../assets/feature-logo.png') bottom right no-repeat,
    #212121;
  background-size: 70%;
  padding: 12vmin 0;
  position: relative;
}

h1 {
  font-size: 40px;
  padding-left: 50px;
  margin-top: 0px;
}

h3 {
  font-weight: normal;
  margin-top: 0px;
  width: 50%;
  padding-left: 50px;
}

h5 {
  margin-bottom: 5px;
  margin-top: 0;
}

.mastheadbottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  height: 150px;
  margin: 0px;
}

.videoplaylist {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 50px;
  /* background: rgba(0, 0, 0, 0.3); 
    border: 1px solid #333;
    border-radius: 5px;
  */
  padding: 20px;
  width: 266px;
  height: 170px;
}

.rssmessage {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: right;
  padding-right: 70px;
  margin-top: 190px;
  width: 100%;
}

.rssbutton {
  margin-top: 10px;
}

h4 {
  font-family: 'AvenirNextLTW01-Italic', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  margin: 5px;
  text-align: right;
}

[class^='icon-']:before,
[class*=' icon-']:before {
  font-family: 'fontello';
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
}

.icon-rss:before {
  content: '\f09e';
} /* '' */

@media screen and (min-width: 699px) and (max-width: 900px) {
  .rssmessage {
    padding-right: 20px;
    margin-bottom: -20px;
    width: 40%;
  }
  .videoplaylist {
    width: 40%;
  }
  .mastheadcontain {
    height: 300px;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    line-height: 2em;
    margin-top: -20px;
    margin-bottom: 0px;
  }

  .rssmessage {
    font-size: 14px;
    padding-right: 30px;
    margin: 10px;
    line-height: 1.2;
  }

  .mastheadcontain {
    height: 480px;
  }
}
</style>

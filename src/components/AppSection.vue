<template>
  <section>
    <a :id="hash" class="hidden-anchor" aria-hidden="true"></a>
    <div class="sectioncontain">
      <div class="info">
        <div class="num">{{ number | numFormat }}</div>
        <h2>
          <a class="anchor" aria-hidden="true" :href="'#' + hash">{{ title }}</a>
        </h2>
        <div v-html="body"></div>
        <a :href="ctaTarget"><button>{{ cta }}</button></a>
      </div>
      <div class="imgvid">
        <iframe width="560" height="315" :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div><!--sectioncontain-->
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    body: {
      type: String
    },
    video: {
      type: String,
      default: ''
    },
    ctaTarget: {
      type: String,
      default: 'https://www.smashingmagazine.com/2018/01/visual-studio-code/'
    },
    number: {
      type: Number
    },
    video: {
      type: String
    },
    hash: {
      type: String
    }
  },
  data() {
    return {
      cta: 'Learn More',
      img: 'screenshot.png' //placeholder for now
    };
  },
  filters: {
    numFormat(val) {
      return val.toString().length === 1 ? `0${val}` : val;
    }
  }
};
</script>

<style lang="scss">
.num {
  font-family: 'AvenirNextLTW01-UltraLi', Helvetica, Arial, sans-serif;
  font-size: 175px;
  margin-left: -80px;
  margin-top: -20px;
  opacity: 0.2;
  position: absolute;
}

section {
  width: 100vw;
  padding: 40px;
}

.sectioncontain {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto 20px;
}

h2 {
  padding-left: 40px;
}

h2 .anchor {
  color: white;
}

.info,
.imgvid {
  width: 50%;
}

.info {
  padding: 20px 100px 20px 0;
  margin-left: -30px;
  position: relative;
}

.imgvid img,
.imgvid iframe {
  width: 100%;
  box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  cursor: pointer;
}

p {
  margin-bottom: 0;
}

pre {
  overflow: scroll;
}

@media screen and (max-width: 1300px) {
  .sectioncontain {
    padding: 0 70px;
  }
  .info {
    padding: 20px 50px 20px 0;
  }
}

@media screen and (max-width: 700px) {
  .sectioncontain {
    flex-direction: column !important;
    padding: 0 40px !important;
  }
  .info,
  .imgvid {
    width: 100% !important;
    margin-bottom: 40px !important;
  }
  .imgvid {
    margin-left: -80px !important;
  }
  h1 {
    padding-left: 20px !important;
  }
  h2 {
    padding-left: 0 !important;
  }
  h3 {
    width: 83% !important;
  }
  .num {
    font-size: 110px;
    margin-left: -40px;
    margin-top: 5px;
  }
  pre {
    font-size: 15px !important;
  }
  .bottomtag {
    padding-right: 30px !important;
    margin-top: 0 !important;
  }
  .info p {
    width: 75vw;
  }
}
</style>

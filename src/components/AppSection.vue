<template>
  <section>
    <div class="sectioncontain">
      <div class="info">
        <div class="num">{{ number | numFormat }}</div>
        <h2>{{ title }}</h2>
        <div v-html="body"></div>
        <a href=""><button>{{ cta }}</button></a>
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
    number: {
      type: Number
    },
    video: {
      type: String
    }
  },
  data() {
    return {
      cta: 'Learn More',
      img: 'screenshot.png' //placeholder for now
    }
  },
  filters: {
    numFormat(val) {
      return val.toString().length === 1 ? `0${val}` : val
    }
  }
}
</script>

<style scoped>
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
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto 20px;
}

h2 {
  padding-left: 40px;
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

@media (max-width: 900px) {
  .sectioncontain {
    padding: 0 70px;
  }
  .info {
    padding: 20px 50px 20px 0;
  }
}

@media (max-width: 700px) {
  .sectioncontain {
    flex-direction: column;
  }
  .info,
  .imgvid {
    width: 100%;
    margin-bottom: 40px;
  }
  .imgvid {
    margin-left: -40px;
  }
  h1 {
    padding-left: 20px;
  }
  h3 {
    width: 83%;
  }
  .bottomtag {
    padding-right: 30px;
    margin-top: 0;
  }
}

p {
  margin-bottom: 0;
}
</style>
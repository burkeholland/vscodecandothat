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
        <img src="./../assets/screenshot.png" alt="video of x">
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
    number: {
      type: Number
    }
  },
  data() {
    return {
      cta: 'Learn More',
      img: 'screenshot.png'
    };
  },
  filters: {
    numFormat(val) {
      return `0${val + 1}`;
    }
  }
};
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
.imgvid video {
  width: 100%;
  padding: 20px;
}

p {
  margin-bottom: 0;
}
</style>
<template>
  <section>
    <div class="sectioncontain">
      <div class="info">
        <div class="num">{{ number | numFormat }}</div>
        <h2>{{ title }}</h2>
        <div v-html="body"></div>
        <a href=""><button>{{ cta }}</button></a>
      </div>
      <div v-if="video" class="imgvid">
        <video @click="playpause">
          <source :src="video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div v-else class="imgvid">
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
    video: {
      type: String,
      default: ''
    },
    number: {
      type: Number
    }
  },
  data() {
    return {
      isPlaying: false,
      cta: 'Learn More',
      img: 'screenshot.png' //placeholder for now
    }
  },
  methods: {
    playpause(e) {
      if (this.isPlaying) {
        e.target.pause()
        this.isPlaying = false
      } else {
        e.target.play()
        this.isPlaying = true
      }
    }
  },
  filters: {
    numFormat(val) {
      return val.toString().length === 1 ? `0${val + 1}` : val
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
.imgvid video {
  width: 100%;
  box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  cursor: pointer;
}

p {
  margin-bottom: 0;
}
</style>
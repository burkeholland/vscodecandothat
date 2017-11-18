<template>
  <section>
    <div class="info">
      <div class="num">{{ number }}</div>
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <a href=""><button>{{ cta }}</button></a>
    </div>
    <div class="imgvid">
      <img src="./../assets/screenshot.png" alt="video of x">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      number: '01',
      title: 'Emmet',
      desc:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nesciunt, accusamus, illo deleniti rerum, quod sed repellat voluptatum consequuntur aspernatur facilis necessitatibus officia reprehenderit reiciendis iusto qui minima? Corrupti, qui!',
      cta: 'Learn More',
      img: 'screenshot.png'
    };
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
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 40px auto;
}

h2 {
  padding-left: 40px;
}

.info {
  padding: 20px 100px 20px 20px;
  position: relative;
}

.imgvid img,
.imgvid video {
  width: 100%;
  padding: 20px;
}
</style>
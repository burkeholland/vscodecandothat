<template>
  <div id="app">
    <app-masthead />
    <app-section
      v-for="(d, i) in info"
      :key="i"
      :title="d.title"
      :body="d.body"
      :video="d.video"
      :number="i"
      :ctaTarget="d.ctaTarget"
      :hash="d.hash"
      class="dark" />
  </div>
</template>

<script>
import AppSection from './components/AppSection';
import AppMasthead from './components/AppMasthead';

export default {
  components: {
    AppSection,
    AppMasthead
  },
  computed: {
    info() {
      // compute the anchor hash for each title
      this.$store.state.info.map(item => {
        return (item.hash = item.title.toLowerCase().replace(/ /g, '-'));
      });
      return this.$store.state.info;
    }
  }
};
</script>

<style>
@font-face {
  font-family: 'AvenirNextLTW01-UltraLi';
  src: url('./assets/Fonts/17c55b27-e9ab-43cd-b948-d49f97480d68.eot?#iefix');
  src: url('./assets/Fonts/17c55b27-e9ab-43cd-b948-d49f97480d68.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/2e3f5cb9-101f-46cf-a7b3-dfaa58261e03.woff2')
      format('woff2'),
    url('./assets/Fonts/fa19948e-5e38-4909-b31e-41acd170d6f2.woff')
      format('woff'),
    url('./assets/Fonts/6de0ce4d-9278-467b-b96f-c1f5f0a4c375.ttf')
      format('truetype'),
    url('./assets/Fonts/9fd4ea0c-b19a-4b21-9fdf-37045707dd78.svg#9fd4ea0c-b19a-4b21-9fdf-37045707dd78')
      format('svg');
}
@font-face {
  font-family: 'AvenirNextLTW01-Regular';
  src: url('./assets/Fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix');
  src: url('./assets/Fonts/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2')
      format('woff2'),
    url('./assets/Fonts/1e9892c0-6927-4412-9874-1b82801ba47a.woff')
      format('woff'),
    url('./assets/Fonts/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf')
      format('truetype'),
    url('./assets/Fonts/52a192b1-bea5-4b48-879f-107f009b666f.svg#52a192b1-bea5-4b48-879f-107f009b666f')
      format('svg');
}
@font-face {
  font-family: 'AvenirNextLTW01-Italic';
  src: url('./assets/Fonts/d1fddef1-d940-4904-8f6c-17e809462301.eot?#iefix');
  src: url('./assets/Fonts/d1fddef1-d940-4904-8f6c-17e809462301.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/7377dbe6-f11a-4a05-b33c-bc8ce1f60f84.woff2')
      format('woff2'),
    url('./assets/Fonts/92b66dbd-4201-4ac2-a605-4d4ffc8705cc.woff')
      format('woff'),
    url('./assets/Fonts/18839597-afa8-4f0b-9abb-4a30262d0da8.ttf')
      format('truetype'),
    url('./assets/Fonts/1de7e6f4-9d4d-47e7-ab23-7d5cf10ab585.svg#1de7e6f4-9d4d-47e7-ab23-7d5cf10ab585')
      format('svg');
}
@font-face {
  font-family: 'AvenirNextLTW01-BoldCn';
  src: url('./assets/Fonts/07690b8a-c348-4c53-8de3-59f7cfef9ee8.eot?#iefix');
  src: url('./assets/Fonts/07690b8a-c348-4c53-8de3-59f7cfef9ee8.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/9f6106aa-36e0-4cfb-8cda-c3354eab2461.woff2')
      format('woff2'),
    url('./assets/Fonts/ff039068-be8b-415c-b1a9-24eedee1c3ab.woff')
      format('woff'),
    url('./assets/Fonts/cdd2cecb-bd0e-41e5-9ecd-ef60f52a35be.ttf')
      format('truetype'),
    url('./assets/Fonts/390c08bc-8d21-4af3-95a1-a73c21f189cd.svg#390c08bc-8d21-4af3-95a1-a73c21f189cd')
      format('svg');
}
@font-face {
  font-family: 'fontello';
  src: url('./assets/Fonts/fontello.eot?802126');
  src: url('./assets/Fonts/fontello.eot?802126#iefix')
      format('embedded-opentype'),
    url('./assets/Fonts/fontello.woff2?802126') format('woff2'),
    url('./assets/Fonts/fontello.woff?802126') format('woff'),
    url('./assets/Fonts/fontello.ttf?802126') format('truetype'),
    url('./assets/Fonts/fontello.svg?802126#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'AvenirNextLTW01-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c1c1c1;
  background: #292929;
  margin: 0;
  padding: 0;
  line-height: 1.4em;
  font-size: 18px;
}

#app {
  overflow-x: hidden;
}

h1 {
  font-family: 'AvenirNextLTW01-BoldCn', Helvetica, Arial, sans-serif;
}

h1,
h2,
h3 {
  color: white;
}

/* reset button */
[role='button'],
input[type='submit'],
input[type='reset'],
input[type='button'],
button {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

/* Reset `button` and button-style `input` default styles */
input[type='submit'],
input[type='reset'],
input[type='button'],
button {
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button; /* for input */
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;
}
input::-moz-focus-inner,
button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

a,
a:visited,
a:active {
  color: #fec302;
  text-decoration: none;
}

button {
  font-family: 'AvenirNextLTW01-BoldCn', Helvetica, Arial, sans-serif;
  color: #fec302;
  border: 3px solid #fec302;
  padding: 8px 30px;
  border-radius: 1000px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  float: right;
  transition: 0.25s all ease-out;
}

button:hover {
  background: #fec302;
  transition: 0.2s all ease-in;
  color: black;
}

.dark:nth-of-type(even) {
  background: #212121;
}

pre {
  padding: 4px;
  background: #191919;
  color: #fec302;
}
</style>

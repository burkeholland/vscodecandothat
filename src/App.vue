<template>
  <div id="app">
    <app-section 
      v-for="(d, i) in info" 
      key="i" 
      :title="d.title" 
      :body="d.body" 
      :number="i" 
      class="dark"/>
  </div>
</template>

<script>
import AppSection from './components/AppSection';

export default {
  components: {
    AppSection
  },
  data() {
    return {
      isDark: true,
      info: [
        {
          title: 'Interactive Playground',
          body:
            '<p>Visible the first time VS Code is opened for a project. Get back to it at any time by selecting "Welcome" from the Command Pallete.</p>',
          video:
            'https://codevids.azureedge.net/videos/interactive-playground.mp4'
        },
        {
          title: 'Emmet',
          body:
            '<p>Emmet is a markup expansion tool that makes writing HTML much easier. It has a simple syntax and is not difficult to master. VS Code supports Emmet by default.</p><p>Refer to the <a class="has-text-weight-bold" href="https://docs.emmet.io/cheat-sheet/">Emmet Cheat Sheet</a> to learn more about the Emmet syntax.</p>',
          video: 'https://codevids.azureedge.net/videos/emmet.mp4'
        },
        {
          title: 'Wrap Individual Lines',
          body:
            "<p>Wrap any text with a tag. This box also supports Emmet.</p><p>If you have multiple lines that all need to be wrapped in separate tags, use the<code>*</code> symbol.</p><p>A good idea is to add a keyboard shortcut for this as it's paticularly useful for wrapping links with anchor.I have this mapped to <code>Option + Shift + W</code> in my setup. tags.</p>",
          video:
            'https://codevids.azureedge.net/videos/emmet-wrap-selection.mp4'
        },
        {
          title: 'Prettier',
          body: `<p>Prettier is a JavaScript code formatting tool. It is paticularly useful to ensure that all developers working on a project are formatting code the same way.</p><p>Prettier has many settings that can be customized, as well as integration with ESLint. Additionally, Visual Studio Code can be configured to format code with Prettier automatically by setting <code>formatOnSave</code> in User Settings.</p><p>1. Install the Prettier Extension for Visual Studio Code</p><p>2. Add the following line to your <strong>User Preferences...</strong></p><pre><code class="language-javascript">"prettier.singleQuote": true, 
"prettier.eslintIntegration": true, 
"prettier.tabWidth": 2, 
"editor.formatOnSave": true</code></pre>`,
          video: 'https://codevids.azureedge.net/videos/prettier.mp4'
        },
        {
          title: 'Font Ligatures',
          body: `<p>Font Ligatures are when two ore more characters are joined together to create a special symbols. Ligatures are especially well suited for programming where compound symbols such as <code>>=</code> or <code>===</code> are used.</p><p><a class="has-text-weight-bold" href="https://github.com/tonsky/FiraCode">Download FiraCode Font</a> and add to fonts on your computer.</p><p>Add the following line to your<strong>User Preferences...</strong></p><pre><code class="language-javascript">"editor.fontFamily": "Fira Code", 
"editor.fontLigatures": true</code></pre>`,
          video: 'https://codevids.azureedge.net/videos/font-ligatures.mp4'
        }
      ]
    };
  },
  computed: {
    zebra() {
      let x = this.info.filter((element, index) => {
        if (index % 2 === 0) {
          return (this.isDark = true);
        }
      });
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
  /* cursor: default; */
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
  transition: 0.3s all ease-out;
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
}
</style>

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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
        video: 'https://codevids.azureedge.net/videos/emmet-wrap-selection.mp4'
      },
      {
        title: 'Prettier',
        body: `<p>Prettier is a JavaScript code formatting tool. It is paticularly useful to ensure that all developers working on a project are formatting code the same way.</p><p>Prettier has many settings that can be customized, as well as integration with ESLint. Additionally, Visual Studio Code can be configured to format code with Prettier automatically by setting <code>formatOnSave</code> in User Settings.</p><p>1. Install the Prettier Extension for Visual Studio Code</p><p>2. Add the following line to your <strong>User Preferences...</strong></p><pre v-highlightjs><code class="javascript">"prettier.singleQuote": true, 
"prettier.eslintIntegration": true, 
"prettier.tabWidth": 2, 
"editor.formatOnSave": true</code></pre>`,
        video: 'https://codevids.azureedge.net/videos/prettier.mp4'
      },
      {
        title: 'Font Ligatures',
        body: `<p>Font Ligatures are when two ore more characters are joined together to create a special symbols. Ligatures are especially well suited for programming where compound symbols such as <code>>=</code> or <code>===</code> are used.</p><p><a class="has-text-weight-bold" href="https://github.com/tonsky/FiraCode">Download FiraCode Font</a> and add to fonts on your computer.</p><p>Add the following line to your<strong>User Preferences...</strong></p><pre v-highlightjs><code class="javascript">"editor.fontFamily": "Fira Code", 
"editor.fontLigatures": true</code></pre>`,
        video: 'https://codevids.azureedge.net/videos/font-ligatures.mp4'
      }
    ]
  }
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    info: [
      {
        title: 'Update Image Size',
        body:
          '<p>VS Code can automatically update HTML img tags with the correct size of images. This works for images that are local to the project as well as images included by URL. It also works in CSS properties like `background-image`.</p>',
        video: 'https://www.youtube.com/embed/drXu4L-4Q3I',
        ctaTarget: 'https://youtu.be/8Ry05EZ7Y4o?t=7m36s'
      },
      {
        title: 'Emmet',
        body:
          '<p>Emmet is a markup expansion tool that makes writing HTML much easier. It has a simple syntax and is not difficult to master. VS Code supports Emmet by default.</p><p>Refer to the <a class="has-text-weight-bold" href="https://docs.emmet.io/cheat-sheet/">Emmet Cheat Sheet</a> to learn more about the Emmet syntax.</p>',
        video: 'https://www.youtube.com/embed/e1zhJjM4p0k',
        ctaTarget:
          'https://code.visualstudio.com/docs/editor/emmet?WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Wrap Individual Lines',
        body:
          "<p>Wrap any text with a tag. This box also supports Emmet.</p><p>If you have multiple lines that all need to be wrapped in separate tags, use the<code>*</code> symbol.</p><p>A good idea is to add a keyboard shortcut for this as it's parzticularly useful for wrapping links with anchor.I have this mapped to <code>Option + Shift + W</code> in my setup. tags.</p>",
        video: 'https://www.youtube.com/embed/iJ068939sLw',
        ctaTarget: 'https://youtu.be/8Ry05EZ7Y4o?t=3m36s'
      },
      {
        title: 'Prettier',
        body: `<p>Prettier is a JavaScript code formatting tool. It is paticularly useful to ensure that all developers working on a project are formatting code the same way.</p><p>Prettier has many settings that can be customized, as well as integration with ESLint. Additionally, Visual Studio Code can be configured to format code with Prettier automatically by setting <code>formatOnSave</code> in User Settings.</p><p>1. Install the Prettier Extension for Visual Studio Code</p><p>2. Add the following lines to your <strong>User Preferences...</strong></p><pre v-highlightjs><code class="javascript">"prettier.singleQuote": true,
"prettier.eslintIntegration": true,
"prettier.tabWidth": 2,
"editor.formatOnSave": true</code></pre>`,
        video: 'https://www.youtube.com/embed/GP9mTqCeoi4',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Font Ligatures',
        body: `<p>Font Ligatures are when two ore more characters are joined together to create a special symbols. Ligatures are especially well suited for programming where compound symbols such as <code>>=</code> or <code>===</code> are used.</p><p><a class="has-text-weight-bold" href="https://github.com/tonsky/FiraCode">Download FiraCode Font</a> and add to fonts on your computer.</p><p>Add the following line to your<strong>User Preferences...</strong></p><pre v-highlightjs><code class="javascript">"editor.fontFamily": "Fira Code",
      "editor.fontLigatures": true</code></pre>`,
        video: 'https://www.youtube.com/embed/KI6m_B1f8jc',
        ctaTarget: ''
      },
      {
        title: 'Bracket Pair Colorizer',
        body:
          '<p>When you have a lot of brackets, brances and parenthesis, it can get hard to see where a block of code opens and closes. The Bracket Pair Colorizer extension for VS Code makes corresponding brackets, braces and parenthesis the same color.</p>',
        video: 'https://www.youtube.com/embed/qmiRGlw-uGI',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'JavaScript Type Checking',
        body:
          '<p>Use TypeScript to check your plain JavaScript code by adding a <code>//@ts-check</code> to the top of the file.</p><p> To enable the setting globally across your entire project, add the following line to your <b>User Preferences</b> (<code>⌘ + ,</code>)...</p><pre><code class="language-javascript">"javascript.implicitProjectConfig.checkJs": true  </code></pre><p>Drop a <code>.tsconfig</code> file in your project to control specific TypeScript checking features.</p>',
        video: 'https://www.youtube.com/embed/WOW-BQIcHzs',
        ctaTarget:
          'https://code.visualstudio.com/docs/languages/javascript#_type-checking-and-quick-fixes-for-javascript-files?WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'JSON Intellisense',
        body:
          '<p>Intellisense is provided in JSON files. This works not only in the User Preferences file, but also in package.json files allowing you to see the current version of any npm package as you import it.</p><p>Use <code>Ctrl + Spacebar</code> to trigger intellisense at any time.</p>',
        video: 'https://www.youtube.com/embed/dtEjjHLGL5U',
        ctaTarget:
          'https://code.visualstudio.com/docs/languages/json?WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Node.js Debugging',
        body:
          '<p>Run and debug any JavaScript file without any launch configuration. VS Code also has support for advanced debugging functionality, such as breakpoint expressions and column breakpoints.</p>',
        video: 'https://www.youtube.com/embed/beNIDKgdzwQ',
        ctaTarget: 'https://www.youtube.com/video/4Me2IOS3MFE'
      },
      {
        title: 'Debugging Browser Apps',
        body:
          '<p>Applications running in the browser can also be debugged in VS Code. These would be applications running on frameworks like <a href="">Angular</a>, <a href="">React</a>, <a href="">Vue</a> or others. This is facilitated by VS Code Launch Configurations.</p>',
        video: 'https://www.youtube.com/embed/DFvv2i8Da6k',
        ctaTarget:
          'https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code?WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Log Points',
        body:
          '<p>Log Points allow you to log information out from your application, similar to the way `console.log` works. The difference is that they can be added or removed while the application is running without pausing execution.</p>',
        video: 'https://www.youtube.com/embed/wjzLskBdudw?rel=0',
        ctaTarget:
          'https://code.visualstudio.com/docs/editor/debugging#_log-points?WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Cosmos DB / Mongo DB',
        body:
          '<p>The Cosmos DB extension for VS Code puts Mongo DB database access right inside of the editor.</p>',
        video: 'https://www.youtube.com/embed/NfPhbzRRnYE',
        ctaTarget: 'https://www.youtube.com/embed/6KQprxAm7dk?rel=0'
      },
      {
        title: 'Bookmarks',
        body:
          '<p>Bookmarks is an extension you can use to easily mark your place in your file. A blue bookmark icon will appear in the sidebar and you can traverse the file with some quickkeys</p><p>Command + option + K creates a bookmark, and command + option + J jumps between existing marks.</p>',
        video: 'https://www.youtube.com/embed/XHX-9Zhk0VI?rel=0',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Docker',
        body:
          '<p>VS Code can configure, build, deploy, manage and even debug Docker containers with the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker&WT.mc_id=vscodecandothat-dotcom">Docker</a> extension.</p>',
        video: 'https://www.youtube.com/embed/B06f959Wrdc?rel=0',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Settings Sync',
        body:
          '<p>Use the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync&WT.mc_id=vscodecandothat-dotcom">Settings Sync</a> extension to synchronize your theme, user preferences and installed plugins across installations of VS Code. Note that these instances do not have to be on the same machine. In fact, you can share your exact setup of VS Code with a friend or collegue simply by publishing your settings publically and sending them the ID.</p><p>Note that this is paticularly useful for keeping VS Code stable and the Insiders Build in sync.</p>',
        video: 'https://www.youtube.com/embed/zpTq99ZBwQ0?rel=0',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Deployment',
        body:
          '<p>VS Code can deploy applications directly to Azure with the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice&WT.mc_id=vscodecandothat-dotcom">Azure App Service Tools</a> extension. The extension creates the site via a wizard and then generates a shell script which automates the CLI commands to check code into Git and then pull into Azure.</p><p>When using AppService for Linux,<code>npm install</code> and <code>npm start</code> are run automatically by Azure.</p>',
        video: 'https://www.youtube.com/embed/xyN86KJ6RKs?rel=0',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'Image Preview',
        body:
          '<p>The <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview">Image Preview</a> extension provides inline previews for images included HTML file types. The extension shows a pop-up window in the editor surface, and an optional image preview in the gutter, which can be toggled on or off in User Settings.</p>',
        video: 'https://www.youtube.com/embed/PzlZHmKHXBc?rel=0',
        ctaTarget:
          'https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview&WT.mc_id=vscodecandothat-dotcom'
      },
      {
        title: 'CSS Preview',
        body:
          '<p>VS Code will automatically show a selector in CSS when you hover over your selectors. It uses a visual representation of the markup that will be selected by the CSS to make it easier to compose your rules with confidence.</p>',
        video: 'https://www.youtube.com/embed/5_M2fEhqe3Y?rel=0',
        ctaTarget:
          'https://code.visualstudio.com/docs/languages/css?WT.mc_id=vscodecandothat-dotcom'
      }
    ]
  }
});

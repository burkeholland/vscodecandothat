import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    info: [
      {
        title: 'Emmet',
        body:
          '<p>Emmet is a markup expansion tool that makes writing HTML much easier. It has a simple syntax and is not difficult to master. VS Code supports Emmet by default.</p><p>Refer to the <a class="has-text-weight-bold" href="https://docs.emmet.io/cheat-sheet/">Emmet Cheat Sheet</a> to learn more about the Emmet syntax.</p>',
        video: 'https://codevids.azureedge.net/videos/emmet.mp4'
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
        title: 'Bookmarks',
        body:
          '<p>Bookmarks is an extension you can use to easily mark your place in your file. A blue bookmark icon will appear in the sidebar and you can traverse the file with some quickkeys</p><p>Command + option + K creates a bookmark, and command + option + J jumps between existing marks.</p>',
        video: 'tba'
      },
      {
        title: 'Wrap Individual Lines',
        body:
          "<p>Wrap any text with a tag. This box also supports Emmet.</p><p>If you have multiple lines that all need to be wrapped in separate tags, use the<code>*</code> symbol.</p><p>A good idea is to add a keyboard shortcut for this as it's paticularly useful for wrapping links with anchor.I have this mapped to <code>Option + Shift + W</code> in my setup. tags.</p>",
        video: 'https://codevids.azureedge.net/videos/emmet-wrap-selection.mp4'
      },
      {
        title: 'Font Ligatures',
        body: `<p>Font Ligatures are when two ore more characters are joined together to create a special symbols. Ligatures are especially well suited for programming where compound symbols such as <code>>=</code> or <code>===</code> are used.</p><p><a class="has-text-weight-bold" href="https://github.com/tonsky/FiraCode">Download FiraCode Font</a> and add to fonts on your computer.</p><p>Add the following line to your<strong>User Preferences...</strong></p><pre v-highlightjs><code class="javascript">"editor.fontFamily": "Fira Code", 
"editor.fontLigatures": true</code></pre>`,
        video: 'https://codevids.azureedge.net/videos/font-ligatures.mp4'
      },
      {
        title: 'Interactive Playground',
        body:
          '<p>Visible the first time VS Code is opened for a project. Get back to it at any time by selecting "Welcome" from the Command Pallete.</p>',
        video:
          'https://codevids.azureedge.net/videos/interactive-playground.mp4'
      },
      {
        title: 'Terminals',
        body:
          '<p>VS Code has a powerful built-in terminal featuring support for multiple terminal instances and high performance rendering. It also provides convenient access to the system termainal at any time with the <code>Ctr/Cmd + Shift + C</code> keyboard shortcut.</p>',
        video:
          'https://codevids.azureedge.net/videos/open-external-terminal.mp4'
      },
      {
        title: 'Debugging',
        body:
          '<p>Run and debug any JavaScript file without any launch configuration. VS Code also has support for advanced debugging functionality, such as breakpoint expressions and column breakpoints.</p>',
        video: 'https://codevids.azureedge.net/videos/run-debug.mp4'
      },
      {
        title: 'JavaScript Type Checking',
        body:
          '<p>Use TypeScript to check your plain JavaScript code by adding a <code>//@ts-check</code> to the top of the file.</p><p> To enable the setting globally across your entire project, add the following line to your <b>User Preferences</b> (<code>⌘ + ,</code>)...</p><pre><code class="language-javascript">"javascript.implicitProjectConfig.checkJs": true  </code></pre><p>Drop a <code>.tsconfig</code> file in your project to control specific TypeScript checking features.</p>',
        video: 'https://codevids.azureedge.net/videos/ts-check.mp4'
      },
      {
        title: 'JSON Intellisense',
        body:
          '<p>Intellisense is provided in JSON files. This works not only in the User Preferences file, but also in package.json files allowing you to see the current version of any npm package as you import it.</p><p>Use <code>Ctrl + Spacebar</code> to trigger intellisense at any time.</p>',
        video: 'https://codevids.azureedge.net/videos/json-intellisense.mp4'
      },
      {
        title: 'Docker',
        body:
          '<p>VS Code can configure, build, deploy, manage and even debug Docker containers with the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker">Docker</a> extension.</p>',
        video: 'https://codecandothat.azureedge.net/videos/docker.mp4'
      },
      {
        title: 'Settings Sync',
        body:
          '<p>Use the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync">Settings Sync</a> extension to synchronize your theme, user preferences and installed plugins across installations of VS Code. Note that these instances do not have to be on the same machine. In fact, you can share your exact setup of VS Code with a friend or collegue simply by publishing your settings publically and sending them the ID.</p><p>Note that this is paticularly useful for keeping VS Code stable and the Insiders Build in sync.</p>',
        video: 'https://codevids.azureedge.net/videos/settings-sync.mp4'
      },
      {
        title: 'Launch Configurations',
        body:
          '<p>VS Code can launch and attach the debugger across multiple processes. This is called a "Compound Launch Configuration". This is useful when dealing with a font-end heavy application that contains both a server comonent and some sort of built-in development server (such as Webpack) which is hanlding live-reloads.</p><p>This video uses the following launch configuration to debug both an application that has both server (Express) and front-end (React) components and uses the following launch configuration (launch.json).</p><pre><code class="language-javascript">{\n  "compounds": [\n    {\n      "name": "Launch Browser/Server",\n      "configurations": ["Launch Browser", "Launch Server"] \n    }\n  ],\n  "configurations": [\n    {\n      "type": "chrome",\n      "request": "launch",\n      "name": "Launch Browser",\n      "url": "http://localhost:3000",\n      "webRoot": "${workspaceRoot}/src"\n    },\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Launch Server",\n      "program": "${workspaceRoot}/server/server.js"\n    }\n  ]\n}</code></pre><p>Note: you need to have the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome">Debugger For Chrome</a> extension installed to debug applications running in Chrome.</p>',
        video:
          'https://codevids.azureedge.net/videos/debug-multiple-processes.mp4'
      },
      {
        title: 'Deployment',
        body:
          '<p>VS Code can deploy applications directly to Azure with the <a class="has-text-weight-bold" href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice">Azure App Service Tools</a> extension. The extension creates the site via a wizard and then generates a shell script which automates the CLI commands to check code into Git and then pull into Azure.</p><p>When using AppService for Linux,<code>npm install</code> and <code>npm start</code> are run automatically by Azure.</p>',
        video: 'https://codevids.azureedge.net/videos/publish-to-azure.mp4'
      }
    ]
  }
});

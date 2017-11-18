// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { store } from './store/store';
// import VueHighlightJS from 'vue-highlightjs';

// // Tell Vue.js to use vue-highlightjs
// Vue.use(VueHighlightJS);

// Vue.directive('highlightjs', {
//   deep: true,
//   bind: function(el, binding) {
//     console.log('working');
//     // on first bind, highlight all targets
//     let targets = el.querySelectorAll('code');
//     targets.forEach(target => {
//       // if a value is directly assigned to the directive, use this
//       // instead of the element content.
//       if (binding.value) {
//         target.textContent = binding.value;
//       }
//       hljs.highlightBlock(target);
//     });
//   },
//   componentUpdated: function(el, binding) {
//     // after an update, re-fill the content and then highlight
//     let targets = el.querySelectorAll('code');
//     targets.forEach(target => {
//       if (binding.value) {
//         target.textContent = binding.value;
//         hljs.highlightBlock(target);
//       }
//     });
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});

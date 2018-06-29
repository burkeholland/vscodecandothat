import Vue from 'vue';
import Vuex from 'vuex';
import tips from '../data/tips';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    info: tips
  }
});

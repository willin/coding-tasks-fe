import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './app.vue';

Vue.use(Vuetify);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
});


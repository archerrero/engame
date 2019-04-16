import Vue from 'vue';
// import Vue2TouchEvents from 'vue2-touch-events';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.use(Vue2TouchEvents);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

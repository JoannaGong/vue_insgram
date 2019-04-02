import Vue from 'vue';
import App from './App.vue';
import VueDragscroll from 'vue-dragscroll';

Vue.use(VueDragscroll);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import AOS from 'aos'
import 'vuetify/dist/vuetify.min.css'
import 'aos/dist/aos.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'


Vue.use(Vuetify);
Vue.config.productionTip = false

require('@/assets/css/style.css');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  created(){
    AOS.init({
      duration: 1200,
    });
  },
  template: '<App/>'
})

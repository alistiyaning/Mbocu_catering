import Vue from 'vue'
import Vuex from 'vuex'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// import './plugins/click-away'

import './scss/app.scss';

import vuetify from './plugins/vuetify'

axios.defaults.baseURL = 'https://mbocuapi.herokuapp.com/api/'

Vue.use(Antd);
Vue.use(Vuex);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
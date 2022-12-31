import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {createPinia, PiniaVuePlugin} from 'pinia'




Vue.config.productionTip = false

const pinia = createPinia();

Vue.use(PiniaVuePlugin);



new Vue({
  pinia,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

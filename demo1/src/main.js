import Vue from 'vue'
import App from './App.vue'
import yb from 'yb-ui-founder'
import 'yb-ui-founder/dist/yb-ui.css'
Vue.config.productionTip = false
Vue.use(yb)

new Vue({
  render: h => h(App),
}).$mount('#app')

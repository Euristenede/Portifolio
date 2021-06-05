// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTypedJs from 'vue-typed-js' //Fica escrevendo na Tela (Hero)
import ProgressBar from 'vue-simple-progress'//Barra de progresso das habilidades(Skills)

Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(ProgressBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App ,
    ProgressBar
  },
  template: '<App/>'
})


import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import router from './router'

// include script file
import './lib/CustomScript'

// include all css files
import './lib/CustomCss'

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.use(VueGoogleMaps, {
   load: {
      key: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' // Add your here your google map api key
   }
})

Vue.config.productionTip = false

new Vue({
   router,
   render: h => h(App),
   components: { App }
}).$mount('#app')

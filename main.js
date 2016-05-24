
import Vue from 'vue'
import vueTouch from 'vue-touch'
import App from './components/App.vue'

Vue.use(vueTouch)

// mount a root Vue instance
new Vue({
    el: 'body',
    components: {
        // include the required component
        // in the options
        app: App
    }
})
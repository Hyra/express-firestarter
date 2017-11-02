var Vue = process.env.NODE_ENV === 'production' ? require('vue/dist/vue.min.js') : require('vue/dist/vue.js')

Vue.component('example', require('./components/example.vue'));

const app = new Vue({
  el: '#app'
})
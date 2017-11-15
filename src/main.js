var Vue = process.env.NODE_ENV === 'production' ? require('vue/dist/vue.min.js') : require('vue/dist/vue.js')

Vue.component('example', require('./components/example.vue'));

import VueWebsocket from "vue-websocket";

if(process.env.NODE_ENV === 'production') {
    var socket = io.connect('https://' + location.hostname + '/', { reconnect: true, transports: ['websocket'], path: '/socket.io' })
    Vue.use(VueWebsocket, socket)
} else {
    Vue.use(VueWebsocket, 'http://localhost:3000')
}

const app = new Vue({
  el: '#app'
})

// socket.on('newpage', function (data) {
//   console.log(data);
// });
var Vue = process.env.NODE_ENV === 'production' ? require('vue/dist/vue.min.js') : require('vue/dist/vue.js')

Vue.component('example', require('./components/example.vue'));

const app = new Vue({
  el: '#app'
})

var socket = io.connect('http://localhost:3000');
//- var socket = io.connect('https://' + location.hostname + '/', { reconnect: true, transports: ['websocket'], path: '/socket.io' })

socket.on('newpage', function (data) {
  console.log(data);
});
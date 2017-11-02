var Vue = process.env.NODE_ENV === 'production' ? require('vue/dist/vue.min.js') : require('vue/dist/vue.js')

Vue.component('example', require('./components/example.vue'));

const app = new Vue({
  el: '#app'
})

if(process.env.NODE_ENV === 'production') {
    var socket = io.connect('https://' + location.hostname + '/', { reconnect: true, transports: ['websocket'], path: '/socket.io' })
} else {
    var socket = io.connect('http://localhost:3000');
}

socket.on('newpage', function (data) {
  console.log(data);
});
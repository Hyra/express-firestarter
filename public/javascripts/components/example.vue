<template>
    <div>
        <h1>Heya</h1>
        <ul>
            <li v-for="page in pages">
                {{ page.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            pages: []
        }
    },
    props: {
        slug: {
            type: String
        }
    },
    mounted () {
        let that = this
        console.log(process.env.SOCKET_URL)

        if(process.env.NODE_ENV === 'production') {
            var socket = io.connect('https://' + location.hostname + '/', { reconnect: true, transports: ['websocket'], path: '/socket.io' })
        } else {
            var socket = io.connect('http://localhost:3000')
        }
        chat.on('newpage', function (data) {
            console.log('data', data)
            that.pages.push(data)
        })
        console.log('mounted')
    }
}
</script>

<style scoped lang="scss">
.ha {
    color: green
    span {
        color: red
    }
}
</style>
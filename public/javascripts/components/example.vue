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
        var socket = io.connect('http://localhost:3000')
        var chat = io.connect('http://localhost:3000/' + this.slug)
        setTimeout(() => {
            console.log('hai')
        }, 1000)
        socket.on('hello', function (data) {
            console.log(data)
            //- socket.emit('my other event', { my: 'data' })
        })
        chat.on('newpage', function (data) {
            console.log('data', data)
            that.pages.push(data)
        })
        socket.on('to_all', function (data) {
            console.log(data)
            //- socket.emit('my other event', { my: 'data' })
        })
        chat.on('to_chat', function (data) {
            console.log('to_chat', data)
            //- socket.emit('my other event', { my: 'data' })
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
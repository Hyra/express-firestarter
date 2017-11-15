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
    socket: {
        events: {
            // https://github.com/icebob/vue-websocket
            // Similar as this.$socket.on("changed", (msg) => { ... }); 
            // If you set `prefix` to `/counter/`, the event name will be `/counter/changed` 
            // 
            newpage(msg) {
                console.log("Something changed: ",  msg);
                console.log(msg);
            },
            connect() {
                    console.log("Websocket connected to " + this.$socket.nsp);
                },
        }
    },
    mounted () {
        let that = this
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
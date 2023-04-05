<template>
    <div class="container">
        <template v-if="user.name">
            <ul v-for="(chat, $idx) in allChat" :key="$idx">
                <li>{{ chat.name }} nói: {{ chat.chat }}</li>
            </ul>
            <input type="text" v-model="user.chat">
            <button @click="sendMsg">Send Message</button>
            <div :class="classNamePrice">Lùa gà time: {{ price }}</div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'ChatView',
    data() {
        return {
            allChat: [],
            user: {
                name: null,
                chat: null
            },
            price: 0,
            classNamePrice: ''
        }
    },
    sockets: {
        connect() {
            console.log('socket connected')
        }
    },
    methods: {
        sendMsg() {
            this.$socket.emit('on-chat', this.user)
        },
        onSubscribeChat() {
            this.sockets.subscribe('user-chat', (data) => this.allChat.push(data))
        },
        onSubscribePrice() {
            this.sockets.subscribe('broadcast-price', data => this.price = data.price)
        },
        unsubscribeSocket(eventName = []) {
            eventName.forEach(name => this.sockets.unsubscribe(name))
        }
    },
    mounted() {
        while (!this.user.name)
            this.user.name = prompt('Nhập tên của bạn !')

        this.onSubscribeChat()
        this.onSubscribePrice()
    },
    destroyed() {
        this.unsubscribeSocket(['user-chat', 'broadcast-price'])
    },
    watch: {
        price(newVal, oldVal) {
            if (newVal > oldVal) return this.classNamePrice = 'text-success'

            return this.classNamePrice = 'text-danger'
        }
    }
}
</script>

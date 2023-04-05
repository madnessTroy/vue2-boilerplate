const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:9090',
        methods: ['GET', 'POST'],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
})

io.on('connection', socket => {
    console.log('Client connected')
    socket.on('on-chat', data => {
        console.log()
        io.emit('user-chat', data)
    })
})

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const broadcastPrice = async () => {
    while (true) {
        const price = Math.random() * 1000000
        const result = parseFloat(price.toFixed(2))
        io.emit('broadcast-price', { price: result })
        await sleep(2000)
    }
}
broadcastPrice()

server.listen(1441)

const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')


const {generateMessage,generateLocationMessage} = require('./chat/messages')
const {getUser,removeUser,getRoomUsers,addUser} = require('./chat/users')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../../..')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {

    socket.on('join',({username,room},cb)=>{
       const data = addUser({id:socket.id,username,room})
       if(data.error){
          return cb(data.error)
       }
       socket.join(data.room)
        socket.emit('message', generateMessage('Admin',`Welcome ${data.username}`))
        socket.broadcast.to(data.room).emit('message', generateMessage('Admin',`${data.username} has joined`))
       cb()
    })
 
 
    socket.on('sendMessage', (message,callback) => {
        const filter = new Filter()
        const user = getUser(socket.id);
        console.log(user)
        message = generateMessage(user.username,message)
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        socket.broadcast.to(user.room).emit('message', message)
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        const user = getUser(socket.id);
        socket.broadcast.to(user.room).emit('locationMessage', generateLocationMessage(user.username,`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })

    socket.on('disconnect', () =>{
        const user = removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message',generateMessage('Admin',`${user.username} has left`))
        }
    })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
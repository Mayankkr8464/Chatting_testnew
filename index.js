const http=require('http')
const express= require('express');
const path = require('path');
const { Server } = require("socket.io")

const app=express(); 
const server=http.createServer(app)
const io = new Server(server)
//socket io
io.on('connection', (socket)=>{
    socket.on('user-message', (message)=>{
        io.emit('message', message)
    })
})


app.use(express.static(path.resolve("./public")))

app.get("/", (req, res) => {
    return res.sendFile(path.resolve("./public/index.html"));
});

server.listen(900,'0.0.0.0',()=> {console.log(`server stareded`)})
const express = require('express');
const postRouter = require('./routes/post')
// const http = require('http');
const app = express();

app.get('/',(req, res) => {
    res.send('hello express')
})

app.get('/api',(req, res) => {
    res.send('hello api')
})

app.get('/posts',(req, res) => {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'express' },
        { id: 3, content: 'bye' }
    ])
})

app.use('/post', postRouter)

app.listen(3065, () => {
    console.log('Hello, express');
})

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.end('Hello, node');
// })

// server.listen(3065, () => {
//     console.log('Hello, node');
// })
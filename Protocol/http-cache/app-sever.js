const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 8091

app.get('/', (req, res) => {
    console.log('request html...')
    res.header('Cache-Control', 'max-age=86400')
    res.header('Last-Modified', null)
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/index.css', (req, res) => {
    console.log('request index.css...')
    res.sendFile(path.resolve(__dirname, 'index.css'))
})

app.get('/index.js', (req, res) => {
    console.log('request index.js...')
    res.sendFile(path.resolve(__dirname, 'index.js'))
})

app.get('/banner.png', (req, res) => {
    console.log('request banner.png...')
    res.header('Last-Modified', null)
    res.header('ETag', null)
    res.sendFile(path.resolve(__dirname, 'banner.png'))
})

app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})
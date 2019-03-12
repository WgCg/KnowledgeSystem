const http =  require('http')
const host = '127.0.0.1'
const port = 8090
const server = http.createServer()
const fs = require('fs')
const path = require('path')
const lastModified = 'Wed, 22 Aug 2020 03:45:18 GMT'

server.on('request', (request, response) => {
    const map = new Map([
        ['/', () => {
            console.log('request index.html...')
            response.writeHead(200, 'OK', {
                'Content-Type': 'text/html;charset=UTF-8'
            })
            const readStream = fs.createReadStream(path.resolve(__dirname, 'index.html'))
            readStream.pipe(response)
        }],
        ['/index.css', () => {
            console.log('request index.css...')
            response.writeHead(200, 'OK', {
                'Content-Type': 'text/html;charset=UTF-8',
                'Cache-Control': 'no-cache'
            })
            const readStream = fs.createReadStream(path.resolve(__dirname, 'index.css'))
            readStream.pipe(response)
        }],
        ['/index.js', () => {
            console.log('request index.js...')
            response.writeHead(200, 'OK', {
                'Content-Type': 'text/html;charset=UTF-8',
                'Cache-Control': 'no-store'
            })
            const readStream = fs.createReadStream(path.resolve(__dirname, 'index.js'))
            readStream.pipe(response)
        }],
        ['/banner.png', () => {
            console.log('request banner.png...')
            response.writeHead(200, 'OK', {
                'Content-Type': 'text/html;charset=UTF-8',
                'Cache-Control': 'public,max-age=86400'
            })
            const readStream = fs.createReadStream(path.resolve(__dirname, 'banner.png'))
            readStream.pipe(response)
        }]
    ])

    let handler = map.get(request.url)
    handler && handler()
})

server.listen(port, host, () => {
    console.log(`server is listening on ${host}:${port}`)
})
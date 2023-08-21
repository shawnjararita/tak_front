// import * as http from 'http'

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write(`<h3>Method: ${req.method}</h3>`)
//     res.write(`<h3>Status: ${req.statusCode}</h3>`)
//     res.write(`<h3>URL: ${req.url}</h3>`)
//     res.end(`<h1>Hello 125!</h1>`)
// })

// server.once('request', (req, res) => {
//     console.log(`First Request Recieved at ${new Date()}`)

// })

// server.listen(3000)
// console.log('Server running at http://localhost:3000/')

//===============================================================================================================

// import { Stream } from 'stream'

// const readStream = new Stream.Readable({
//     read(size) {
//         const numberToCount = process.argv[2] || 10
//         for (let i = 0; i < numberToCount; i++) {
//             readStream.push(i.toString())
//         }
//         readStream.push(null)
//     }
// })

// readStream.on('data', (chunck) => console.log(chunck.toString()))
// readStream.on('end', () => console.log('done'))

//===============================================================================================================

// import http from 'http'
// import url from 'url'
// import fs from 'fs'
// import path from 'path'

// const server = http.createServer((request, response) => {
//     const urlObj = url.parse(request.url)
//     const pathName = urlObj.pathname
//     const method = request.method
//     // console.log(pathName, method)

//     if (pathName === '/form') {
//         if (method === 'GET') {
//             fs.readFile(path.join(process.cwd(), 'form.html'), (error, data) => {
//                 if (error) {
//                     response.statusCode = 500
//                     response.statusMessage = 'Internal Server Error'
//                     response.end()
//                 } else {
//                     response.statusCode = 200
//                     response.statusMessage = 'OK'
//                     response.setHeader('Content-Type', 'text/html')
//                     debugger
//                     response.end(data)
//                 }
//             })
//         } else if (method === 'POST') {
//             let data = ''
//             request.on('data', (chunk) => {
//                 data += chunk
//                 debugger
//             });

//             request.on('end', () => {
//                 const params = new URLSearchParams(data)
//                 const name = params.get('name')
//                 const email = params.get('email')
//                 const comments = params.get('comments')
//                 // console.log(data)
//                 response.statusCode = 200
//                 response.statusMessage = 'OK'
//                 response.setHeader('Content-Type', 'text/html')
//                 debugger
//                 response.write(
//                     `<html><body><h1>Thank you, ${name}.</h1><p>Your post has been received.</p>
//           <p>Name: ${name}</p>
//           <p>Email: ${email}</p>
//           <p>Comments: ${comments}</p></body></html>`
//                 )
//                 debugger
//                 response.end()
//             })
//         }
//     } else {
//         response.statusCode = 404
//         response.statusMessage = 'Not Found'
//         response.end()
//     }
// });

// server.listen(3000, () => {
//     console.log('Server listening on port 3000')
// })

// ----------------------------------------------------
// cin >> in C++ & input() in Python


import readline from 'readline'

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function namePlease() {
    try {
        const name = await prompt("What is your name ")
        const lastName = await prompt("What is your last name ")
        console.log(name, lastName)
        rl.close()
    } catch (e) { console.error("Unable to prompt", e) }
}

namePlease()

rl.on('close', () => process.exit(0))
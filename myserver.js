const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write(`
    <div style="height: 90vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <h1 style="font-size: 4rem; color: rgb(36, 181, 212);">My server</h1>
 
    `)

    res.end(`
        <img style="border-radius: 20px" src="https://mythemeshop.com/wp-content/uploads/2020/07/What-Exactly-is-Localhost.jpg" /></div>
    `)
})

server.listen(3001, () => {
    console.log('Server is running...')
})

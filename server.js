const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/hello', (req, res) => {
    return res.status(200).json({
      hi: "world"
    })
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(3000)
})



const express = require('express')
const app = express()
const port = 80

const proxy = require('express-http-proxy')


app.use('/proxy/', proxy('http://localhost:5173/'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

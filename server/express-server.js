const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/productos', (req, res) => {
  res.send('Seccion de productos')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
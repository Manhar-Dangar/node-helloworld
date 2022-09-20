const express = require('express')
const app = express()
const APP_PORT = process.env.APP_PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World! from node heppy to help')
})
app.listen(APP_PORT, () => {
  console.log(`Running app at port:${APP_PORT}`)
})


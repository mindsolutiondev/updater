const express = require('express')
const app = express()
let port = 9000 || process.env.PORT
app.use('/static',express.static('update'))

app.get('/', (req, res) => {
  res.json({ message: 'mind solution updater' })
})

app.listen(port, () => {
  console.log('Application is running on port 9000')
})
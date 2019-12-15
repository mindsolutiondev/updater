const express = require('express')
const app = express()
app.use('/static',express.static('update'))

app.get('/', (req, res) => {
  res.json({ message: 'mind solution updater' })
})

app.listen(process.env.PORT, () => {
  console.log('Application is running on port 9000')
})
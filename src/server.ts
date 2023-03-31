import express from 'express'

const app = express()

app.get('/areas', (req, res) => {
  console.log(req)

  return res.send('Hello')
})

app.listen(3333, () => {
  console.log('server is running')
})

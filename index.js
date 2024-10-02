require('dotenv').config()

const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send("Welcome to our LogIn page!")
})

app.get('/sruraj',(req,res) => {
    res.send("Welcome to sruraj Trading Platform!")
})

app.get('/html',(req,res) => {
    res.send("<h1>My name is Raj</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
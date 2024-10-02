require('dotenv').config()

const express = require('express')
const app = express()
const port = 2000

const githubData = {
  "login": "lukas",
  "id": 29,
  "node_id": "MDQ6VXNlcjI5",
  "avatar_url": "https://avatars.githubusercontent.com/u/29?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lukas",
  "html_url": "https://github.com/lukas",
  "followers_url": "https://api.github.com/users/lukas/followers",
  "following_url": "https://api.github.com/users/lukas/following{/other_user}",
  "gists_url": "https://api.github.com/users/lukas/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lukas/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lukas/subscriptions",
  "organizations_url": "https://api.github.com/users/lukas/orgs",
  "repos_url": "https://api.github.com/users/lukas/repos",
  "events_url": "https://api.github.com/users/lukas/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lukas/received_events",
  "type": "User",
  "site_admin": false
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send("Welcome to our LogIn page!")
})

app.get('/sruraj',(req,res) => {
    res.send("Welcome to sruraj Trading Platform!")
})

app.get('/github',(req,res) => {
  res.json(githubData)
})



app.get('/html',(req,res) => {
    res.send("<h1>My name is Raj</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
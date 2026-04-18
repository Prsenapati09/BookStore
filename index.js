require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const db = require('./db')
db

app.get('/',(req,res)=>{
    res.send('server is ready to serve')
})

// import routes
const Books = require('./src/routes/Books.routes')
const user = require('./src/routes/user.route')

app.use('/books',Books)
app.use('/user',user)



module.exports = app
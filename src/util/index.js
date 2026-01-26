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
const Books = require('../routes/Books.routes')

app.use('/books',Books)



const Port = process.env.PORT
app.listen(Port,()=>{
    console.log("server is running")
})
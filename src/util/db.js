const mongoose = require('mongoose')

const url = process.env.Mongodb_atlas

mongoose.connect(url)

const connection = mongoose.connection

connection.on('connected',()=>{
    console.log("database is connected")
})
connection.on('disconnected',()=>{
    console.log("database is connected")
})
connection.on('error',(error)=>{
    console.log(error)
})

module.exports = connection
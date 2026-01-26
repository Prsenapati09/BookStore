const mongoose = require('mongoose')

const BooksSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true,
    },
    Description:{
        type:String,
        require:true,
        Max:[100,"maximum character 100 letter"]
    },
    author:{
        type:String,
        require:true
    },
    publishyear:{
        type:Number,
        require:true
    }
},
{timestamps:true})

const Books = mongoose.model("Books",BooksSchema)

module.exports = Books
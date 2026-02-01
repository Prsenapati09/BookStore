const mongoose = require('mongoose')

const userScheama = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true}

)

const user = mongoose.model("User",userScheama)

module.exports = user
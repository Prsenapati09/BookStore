const model = require('../model/Book.model')

const Auth = async (req,res,next)=>{
    
    const token = req.headers["authorization"]

    const orgtoken = token.split(" ")[1]
    
    if(!token){
        res.status(400).json({
            succes:false,
            message:"Unauthorized"
        })
    }

    const books = await model.find()
    res.status(200).json({
        succes:true,
        message:"Read your books",
        books
    })

    next()
}

module.exports = Auth
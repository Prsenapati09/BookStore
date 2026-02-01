const model = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{

    try {
        const {username,email,password } = req.body
    
        const userExist = await model.findOne({username,email})
    
        if(userExist){
            return res.status(400).json({
                succes:false,
                message:"Username and email already exist"
            })
        }

        //hash password 
        const salt = await bcrypt.genSalt(10)

        const hashpassword = await bcrypt.hash(password,salt)
        
        const newuser = await model.create({
            username,
            email,
            password:hashpassword
        })
    
        if(!newuser){
            res.status(200).json({
                succes:true,
                message:"User not register try again"
            })
        }
    
        res.status(200).json({
            succes:true,
            message:" User registration succesfully "
        })

    } catch (error) {
        res.status(400).json({
            succes:false,
            message:"Some error",
            error:error
        })
    }

}


//login controller

const Login = async (req,res)=>{

    try {
        const {username,password } = req.body

        const user = await model.findOne({username})

        if(!user){
            res.status(404).json({
                succes:false,
                message:"Username not found"
            })
        }

        const userpassword = await bcrypt.compare(password,user.password) 
        // await model.findOne({password})
        
        if(!userpassword){
            res.status(404).json({
                succes:false,
                message:"Password not found"
            })
        }

        //payload
        const payload={
            username : user.username,
            email:user.email,
            password :user.password
        }
        console.log(payload)
        
        // token

        const token = jwt.sign(payload,process.env.JWT_SRCRET)

        res.status(200).json({
            succes:true,
            message:"Login successfully",
            token
        })


    } catch (error) {
        res.status(400).json({
            succes:false,
            message:"Some error",
            error:error
        })
    }
}

module.exports = {
    register,
    Login
}
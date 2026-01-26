const model = require('../model/Book.model')

const addBook = async (req,res)=>{
    try {
        const {title,Description,author,publishyear} = req.body

        const ifexist = await model.findOne({title})
        if(ifexist){
            res.status(400).json({
                success:false,
                message:'Book already exist ! add another book'
            })
        }

        const addBook = await model.create({title,Description,author,publishyear,})

        if(addBook){
            res.status(200).json({
                success:true,
                message:"New Book added sucessfully"
            })
        }

    } catch (error) {
        console.log(error)
    }
}


const allBooks = async (req,res)=>{
    try {
        const books = await model.find()
        // console.log(books)
        if(books){
            res.status(200).send(books)
        
        }else{
            res.status(404).json({
                success:false,
                message:"Books Not found !",
            })
        }
    } catch (error) {
        res.send('error')
    }
}

const findByid = async (req,res) => {
    try {
        const id = req.params.id
        if(!id){
            res.status(400).json({
                success:true,
                message:"Id not found !"
            })
        }

        const Book = await model.findById(id)

        if(Book){
            res.status(201).send({
                data:Book,
                message:"Book Found Sucessfully"
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Book Not found !"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateBook = async (req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            res.status(400).json({
                success:false,
                message:"id not found ! try again"
            })
        }
        const newdata = req.body
        const updatedata = await model.findByIdAndUpdate(id,newdata)
        if(updatedata){
            res.status(200).json({
                success:true,
                message:"Data update sucessfully"
            })
        }else{
            res.status(400).json({
                success:false,
                message:"Data not Update ! try agin"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const DeleteBook = async (req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            res.status(200).json({
                success:false,
                message:"id Not found!"
            })
        }
        const deleteBooks = await model.findByIdAndDelete(id)

        if(deleteBooks){
            res.status(200).json({
                success:true,
                message:"Book delete sucessfully"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={addBook,allBooks,findByid,updateBook,DeleteBook}
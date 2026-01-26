const express = require('express')
const router = express.Router()
const bookscontroller = require('../controllers/Book.controllers')

router.post('/add',bookscontroller.addBook)
router.get('/',bookscontroller.allBooks)
router.get('/:id',bookscontroller.findByid)
router.put('/update/:id',bookscontroller.updateBook)
router.delete('/delete/:id',bookscontroller.DeleteBook)

module.exports = router

const express = require("express")
const router = express.Router()
const usrecontroller = require('../controllers/user.controller')

router.post('/register',usrecontroller.register)
router.get('/Login',usrecontroller.Login)

module.exports = router
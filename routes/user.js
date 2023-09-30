const express=require('express')
const {loginUser,signupUser,forgottenPassword}= require("../controllers/UserController")
const router=express.Router()

router.post('/login',loginUser)
router.post('/signup',signupUser)
router.post('/forgottenpassword',forgottenPassword)
module.exports=router
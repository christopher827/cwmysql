const express=require('express')
const {createUserData,getUserData}=require("../controllers/usersDataController")
const router=express.Router()

router.post("/",createUserData)
router.get("/",getUserData)
module.exports=router
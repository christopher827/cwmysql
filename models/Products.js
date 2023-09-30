const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
name:String,
description:String,
price:Number,
category:String,
picture:String
})
const productModel=mongoose.model("products",productSchema)
module.exports=productModel
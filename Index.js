require('dotenv').config()
const express=require('express')
const cors=require('cors')
const mysql=require("mysql")
const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get('/',(req,res)=>{
    const sql="SELECT * FROM student";
    db.query(sql,(err,result)=>{
        if (err) {
  return res.json({message:"Error inside server"})          
        }
    return res.json(result)
    })
})
app.post("/createUser",(req,res)=>{
    const sql="INSERT INTO student (`Name`,`Email`,`Age`) VALUES (?)"
    const values=[
req.body.name,
req.body.email,
req.body.age
    ]
    db.query(sql,[values],(err,result)=>{
        if (err) {
            return res.json(err)
        }
        return res.json(result)
    })
})

app.get('/read/:id',(req,res)=>{
    const sql="SELECT * FROM student WHERE ID=?";
    const id=req.params.id;

    db.query(sql,[id],(err,result)=>{
        if (err) {
  return res.json({message:"Error inside server"})          
        }
    return res.json(result)
    })
})

app.put('/updateUser/:id',(req,res)=>{
const sql='UPDATE student SET `Name`=?, `Email`=?  `Age`=? WHERE ID=?';
const id=req.params.id
db.query(sql,[req.body.name,req.body.email,req.body.age,id],(err,result)=>{
    if (err) {
        return res.json({message:"Error inside server"})          
              }
              return res.json(result)
      })
})

app.delete('/deleteUser/:id',(req,res)=>{
    const sql="DELETE FROM student WHERE ID=?"
    const id=req.params.id
db.query(sql,[id],(err,result)=>{
    if (err) {
        return res.json({message:"Error inside server"})          
              }
              return res.json(result)
      })

})

app.listen(process.env.PORT,()=>{
    console.log("Server is Running")
})
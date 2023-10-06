const express=require("express");
const app=express()
app.get("/",(req,res)=>{
    res.send("hiii")
})
app.get("/home",(req,res)=>{
    res.send("index")
})
app.listen(4000)
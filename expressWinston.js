const express=require("express")
const app=express();
const expresswinston=require('express-winston')
const {transports,format}=require('winston')

app.use(expresswinston.logger({
    transports:[
        new transports.Console(),
        new transports.File({
            level:"wran",
            filename:"logwarning.log"
        }),
        new transports.File({
            level:"error",
            filename:"logerror.log"
        })
    ],
    format:format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint(),
    ),
    statusLevels:true

}))
app.get('/',(req,res)=>{
    res.sendStatus(200);
})
app.get('/home',(req,res)=>{
    res.sendStatus(201);
})
app.get('/400',(req,res)=>{
    res.sendStatus(400)
})
app.get('/500',(req,res)=>{
    res.sendStatus(500)
})
app.listen(5000,()=>{
    console.log("connected successfully...")
})
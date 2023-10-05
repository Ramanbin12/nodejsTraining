console.log("hello world")

const a=require('./app')
a.average(10,20)
a.percent(10,20)


//fs
// const fs=require('fs')
// fs.readFile("./sample.txt","utf-8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })
const {readFileSync,writeFileSync} =require('fs')

const a1=readFileSync("./sample.txt","utf-8")

console.log(a1)
console.log("I am first")
const text="this is made by Raman Saini"
const a2=writeFileSync("./sample.txt",text)

//path

const path=require("path")
console.log(path.extname('./index.js'))
console.log(path.dirname('/Desktop/Node Js'))
console.log(path.basename('/Desktop/Node Js'))
console.log(path.join('/Desktop/Node Js'+'/bts'))

//os
const os=require('os')
console.log(os.freemem())
console.log(os.freemem())






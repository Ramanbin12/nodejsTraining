//crypto
const crypto=require("crypto")
const password="hey123bedb"
// const myKey=crypto.createCipher("aes-128-cbc",password)
// let mystr=myKey.update("heylo Raman Saini","utf-8",'hex')
// mystr += myKey.final('hex')
// console.log(mystr)
// let myKey1=crypto.createDecipher("aes-128-cbc",password)
// let myStr1=myKey1.update('4f26325f3d5827eb8c61fbfd53189af0fd7d19e57b9ddcbc47c4158ea1e1f914','hex','utf-8')
// myStr1+=myKey1.final('utf-8')
// console.log(myStr1)

// let key=crypto.randomBytes(32)
// let iv=crypto.randomBytes(16)
// let cipher=crypto.createCipheriv("aes-256-cbc",key,iv)
// let encryptedData=cipher.update("heylo Raman saini")
// encryptedData=Buffer.concat([encryptedData,cipher.final()])
// console.log(encryptedData.toString('hex'))

// let decipher=crypto.createDecipheriv("aes-256-cbc",key,iv)
// let decryptedData=decipher.update(encryptedData,'hex','utf-8')
// decryptedData +=decipher.final('utf-8')
// console.log(decryptedData)


//dns

const dns=require("dns")
// const options={
//     all:true
// }

// dns.lookup('geeksforgeeks.org',(err,addresses,family)=>{
//     console.log(addresses)
//     console.log(family)
// })
// console.log(dns.getServers())
// dns.lookupService('127.0.0.1',22,(error,hostname,service)=>{
//     console.log(hostname,service)
// })
// const rrtype="MX"
// dns.resolve("geeksforgeeks.org",rrtype,(err,records)=>{
//     console.log("records",records)
// })

//URL

// const url=require("url")
// const address="https://www.w3schools.com:6989/nodejs/nodejs_url.asp#ram?:jnrfkj/jkhj"
// let q=url.parse(address,true)
// console.log(q)


//streams
const fs=require("fs")
const readableStream=fs.createReadStream('./public/input.txt')
// readableStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })
// readableStream.on('end',()=>{
//     console.log("finished")
// })
// readableStream.on("error",(error)=>{
//     console.log(error)
// })
// const writableStream=fs.createWriteStream('./public/output.txt')
// readableStream.pipe(writableStream)
// readableStream.on('end', () => {
//     console.log('File copied successfully.');
//   });

const {Readable,Writable }=require("stream")
const { clearTimeout } = require("timers")
// const readableFile=new Readable({
//     read(size){
//         this.push("hello world ")
//         this.push("nfjkenjk")

//     }
// })
// readableFile.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })
// readableFile.pause()
// setTimeout(()=>{
//     readableFile.resume()
// },10000)

// const readableFile=new Readable()
   
//         readableFile.push("hello world ")
//         readableFile.push("nfjkenjk")
//         readableFile.unshift("fffff")
//         readableFile.push("nfjkenjk")

//         readableFile.push(null)


// const fst=readableFile.on("data",(chunk)=>{
//     console.log(chunk)
// })
// const fst1=fst.setEncoding("utf-8")
// console.log(fst1)
  

// const writeFile=new Writable({
//     write: function(chunk, encoding, next) {
//         console.log(chunk.toString());
//         next();
//       }
// })
// writeFile.write("hii")
// writeFile.write("heylo")
// writeFile.cork()

// writeFile.write("hiirufihef")
// writeFile.uncork()
// writeFile.write("hdwuekd")


//queryString

// const querystring=require("querystring")
// let urlQuery ="username=user1&units=kgs&units=pounds&permission=false"; 
// let pasedObject=querystring.parse(urlQuery)
// console.log(pasedObject)
// console.log(pasedObject.username)

//OS
// var os = require('os');
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("Free memory : " + os.freemem());
// console.log("total memory: " + os.totalmem());
// console.log("n/w interfaces: " +  os.networkInterfaces());
// console.log("endianess of system: " + os.endianness());
// console.log("hostname: " + os.hostname());
// console.log("platform : " + os.platform());
// console.log("os release: " + os.release());


//path

// const path=require("path")
// const { setTimeout } = require("timers/promises")
// const processs=require("process")
// console.log(process.env.PATH)
// console.log(process.env.PATH.split(path.delimiter))
// const path2=path.dirname("/home/ramandeep/Desktop/Node Js/InbuiltModules.js")
// console.log(path2)
// console.log("dirname" ,__dirname)
// console.log("filename",__filename)
// console.log(path.extname("index.js"))
// let path3=path.format({
//     root:"C:\\ejfej\\root",
//     dir:"website\\dist",
//     base:"index.html"
// })
// console.log(path3)
// let path4=path.join("users/admin/files","index.html")
// console.log(path4)
// const path5=path.parse(path4)
// console.log(path5)



//timers

// const time=setInterval(()=>{
//     console.log("hello world")
//     clearInterval(time)
// },500)

const t=setTimeout(()=>{
    console.log("heyyy");
    clearTimeout(t) 
    console.log("world")
},1000)

// const zlib=require("zlib")
// const gzib=zlib.createGzip()
// const r=fs.createReadStream("./public/input.txt")
// const w=fs.createWriteStream("./public/output.txt")
// r.pipe(gzib).pipe(w)

// const zlib=require("zlib")
// const gzib=zlib.createUnzip()
// const r=fs.createReadStream("./public/input.txt")
// const w=fs.createWriteStream("./public/output.txt")
// r.pipe(gzib).pipe(w)



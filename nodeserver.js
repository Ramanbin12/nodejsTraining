console.log("hello world")
const http=require("http")
const fs=require("fs")
const PORT=4000;
const hostname="localhost";
const home=fs.readFileSync('./index.html','utf-8')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(home)

    }
if(req.url==='/about'){
   return res.end("<h1>About page</h1>")
}
if(req.url==='/contact'){
   return res.end("<h1>Contact page</h1>")

}
else{
   return res.end("<h1>404 page not found</h1>")

}
console.log(req.url)
})

// server.listen(4000,"localhost",()=>{
//     console.log("Server is working on http://localhost:4000")
// })

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`)
})
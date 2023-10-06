console.log("good")
const fs=require('fs')
fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data)
})

const a=fs.readFileSync("./sample.txt","utf-8")
console.log(a);
const text="Technology is the application of knowledge for achieving practical goals in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2]: 117 [3] including both tangible tools such as utensils or machines, and intangible ones such as software. Technology plays a critical role in science, engineering, and everyday life."
fs.writeFileSync("./sample.txt",text)

//append

fs.appendFile("./sample.txt"," Raman Saini",function(err){
    if(err) throw err;
    console.log("updated")
})

//delete

fs.unlink("sale.txt",function(err){
    if(err)throw err
    console.log("deleted")
})

//rename
fs.rename("test.txt","sample.txt",function(err){
    if(err) throw err;
    console.log("rename file")
})

//buffer

const buffer1=Buffer.alloc(100)
const buffer3=Buffer.from([1,2,3,4])
console.log(buffer1.write("Happy Learning"))
console.log(Buffer.isBuffer(buffer1))
const buffer4=Buffer.alloc(20)
buffer1.copy(buffer4)
console.log(buffer4.toString())
console.log(buffer1.slice(0,4).toString())
const buffer5=Buffer.from(" Raman Saini")
console.log(Buffer.concat([buffer1,buffer5]).toString())





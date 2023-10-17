// create a api for password encryption and decryption with crypto module
// 2. errror handling in nodejs
// 3. understand error codes in nodejs

const express=require('express');
const crypto=require('crypto')
const bodyparse=require('body-parser')
const app=express()
app.use(bodyparse.json())
app.post('/encrypt',(req,res)=>{
    const password=req.body.password
    const algorithm='aes-256-cbc'
    const key=crypto.randomBytes(32);
    const iv=crypto.randomBytes(16)
    const cipher=crypto.createCipheriv(algorithm,key,iv)
    let encryptedPassword=cipher.update(password,'utf-8','hex')
    encryptedPassword+=cipher.final('hex')
    res.json({
        encryptedPassword,
        key:key.toString('hex'),
        iv:iv.toString('hex')
    })
})
app.post('/decrypt',(req,res)=>{
    const encryptPassword=req.body.encryptpassword;
    const key=Buffer.from(req.body.key,'hex')
    const iv=Buffer.from(req.body.iv,'hex')

    const algorithm='aes-256-cbc'
    const decipher=crypto.createDecipheriv(algorithm,key,iv)
    let decryptedPassword=decipher.update(encryptPassword,'hex','utf-8')
    decryptedPassword+=decipher.final('utf-8')
    res.json({decryptedPassword})
})
app.listen(4040,()=>{
    console.log("connected suceesfully")
})



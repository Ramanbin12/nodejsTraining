
//callbacks
// const names=["raman","anve","shivam","animesh"]
// const iterator=(arr,cd)=>{
// for(let i=0;i<arr.length;i++){
//     const element=arr[i]
//     cd(element)
// }
// }
// iterator(names,(ele)=>{
//     console.log(ele)
// })



// const userLeft=false
// const userwatching=true


// const userLeft=false
// const userwatching=true

// function watchTutorialCallback(leftCallback,watchingCallback){
//     if(userLeft){
//         leftCallback({
//             name:"user left",
//             message:':('
//         })
//     }
//     else if(userwatching){
//         watchingCallback({
//             name:"raman saini",
//             message:"successfully watching"
//         })
//     }
// }
// watchTutorialCallback((data)=>{
//     console.log(data.name+" "+data.message)
// },(error)=>{
//     console.log(error.name+ " "+ error.message)
// })


//promises


// function watchTutorialPromises(){
//     return new Promise((resolve,reject)=>{
//     if(userLeft){
//         reject({
//             name:"user left",
//             message:':('
//         })
//     }
//     else if(userwatching){
//         resolve({
//             name:"raman saini",
//             message:"successfully watching"
//         })
//     }

//     })
   
// }
// watchTutorialPromises().then(
//     (data)=>{
//         console.log(data.name+" "+data.message)
//     }
// ).catch(
//     (error)=>{
//         console.log(error.name+ " "+ error.message)
//     }
// )


// Promises methods
//promise.all
// const promise1=Promise.resolve(3)
// const promise2=42
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('foo')
//     },1000)
// })
// Promise.all([promise1,promise2,promise3]).then((values)=>{
//     console.log(values)
// })


//promisee.any
// const promise1=new Promise((resolve,reject)=>{
//     reject("quit")
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,"hey")
// })
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,"hii")
// })

// Promise.any([promise1,promise2,promise3]).then((values)=>{
//     console.log(values)
// })


//promise.race

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,700,"yes")
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,"No")
// })
// Promise.race([promise1,promise2]).then((values)=>{
//     console.log(values)
// })


//async await 

// const resolvefunction=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,1000,"fun")
//     })
// }
// const asynccall=async ()=>{
//     console.log("calling")
//     const result=await resolvefunction()
//     console.log(result)
// }
// asynccall()


//async await in for loop
//  const multiply=(a)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,1000,a*a)
//     })
//  }
// const processData=async(arr)=>{
//  for(let i=0;i<arr.length;i++){
//     const item=arr[i];
//     try{
//         const result=await multiply(item)
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }

//  }
// }
const array=[1,2,5,3]
// processData(array)

//forEach 
array.forEach((num,index,array)=>{
    console.log(index + " : " +num)
})


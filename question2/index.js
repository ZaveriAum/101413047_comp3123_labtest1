const resolvedPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res({'message':'delated success!'})
    }, 500)
})

const rejectedPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej('{ error: delayed exception }')
    }, 500)
})

resolvedPromise.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log("Error: " + error)
})

rejectedPromise.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})


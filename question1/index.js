const lowerCaseWords = (arr)=>{
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(arr)){
            reject("Input type is not valid.")
        }else{
            try{
                let filteredArr = arr.filter((ar)=>{
                    return typeof ar === 'string'
                })
                let lowerCaseArr = filteredArr.map(element => {
                    return element.toLowerCase()
                });
                return resolve(lowerCaseArr)
            }catch(e){
                return reject("Error: " + e)
            }
        }
    })
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
.then(result=>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})
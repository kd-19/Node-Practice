let a=25;

let loadingData= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(40);
    }, 2000);
})

loadingData.then((data)=>{
    console.log(a+data);
})
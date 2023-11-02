//File creation in folder

const fs =require('fs');
const path= require('path');

const dirPath= path.join(__dirname,'files');
console.log(dirPath);

// for(let i=3;i<6;i++){
//     fs.writeFileSync(`${dirPath}/demo${i}.txt`,`This is demo${i} file`);
// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("File name is: ", item)
    })
})
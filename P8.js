//CRUD operation in Node
const fs = require('fs');
const path=require('path');

const dirPath=path.join(__dirname,'CRUD');
const filePath=`${dirPath}/demo6.txt`;

//File creation
// fs.writeFileSync(filePath,'This is a demo6 text file');

//File read
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

//File update

// fs.appendFile(filePath,'and This is the updated text in the file after upadte operation',(err)=>{
//     if(!err){
//         console.log('File is updated');
//     }
// });

// File Rename

fs.rename(filePath, `${dirPath}/renamed.txt`,(err)=>{
    if(!err){
        console.log("File name is updated");
    }
})

//File Deletion
// fs.unlinkSync(`${dirPath}/renamed.txt`);

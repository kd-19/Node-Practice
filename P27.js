//File Upload

const express= require('express');
const multer = require('multer');

const app=express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,callbacck){
            callbacck(null,"files")
        },
        filename:function(req,file,callbacck){
            callbacck(null,file.fieldname+"-"+ Date.now() +".png")
        }
    })
}).single("user_file");

app.post('/upload',upload, async (req,res)=>{
    res.send("File Uploaded");
});

app.listen(5000);
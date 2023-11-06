//PUT API method

const express= require('express');
const app= express();
const dbConnect=require('./mongodb');

app.use(express.json());

app.put('/',async (req,res)=>{
    let data=await dbConnect();
    let result= await data.updateOne(
        {name:"V29"},
        { $set:{name:"V29e Pro"} }
    )
    res.send({result:'updated'});
})


app.listen(5000);
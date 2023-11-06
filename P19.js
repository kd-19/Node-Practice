//Get API Method

const express= require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/', async(req,res)=>{
    const data= await dbConnect();
    const result = await data.find().toArray();
    console.log(result);
    res.send(result);
})

app.listen(5000);


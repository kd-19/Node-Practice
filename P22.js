//Delte API method

const express = require('express');
const app= express();
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

app.use(express.json());

app.delete('/:id', async (req,res)=>{
    let data= await dbConnect();
    let result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    console.log(req.params.id);
    res.send(result);
})

app.listen(5000);
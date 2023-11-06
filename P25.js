//Post, Get, Delete, Update API in Mongoose

const express=require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/demo");

const demoSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    brand:String
});

const demoModel = mongoose.model('demo_collection',demoSchema);

// app.post('/create',async (req,res)=>{
//     let data = await new demoModel(req.body);
//     let result =await data.save();
//     console.log(result);
//     res.send(result);
// })



// app.get('/list', async (req,res)=>{
//     let data= await demoModel.find();
//     res.send(data);
// })



// app.delete('/del' ,async (req,res)=>{
//     let data=await demoModel.deleteOne(
//         {name:'Poco edge40'}
//     );
//     console.log(data);
//     res.send(data);
// })


app.put('/update',async (req,res)=>{
    let data = await demoModel.updateOne(
        {name:'Poco edge30'},
        {$set: {category:'mobile', brand:'Poco'}}
    );
    console.log(data);
    res.send(data);
})

app.listen(5000);


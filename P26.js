//Search API

const express= require('express');
const  mongoose = require('mongoose');
const app= express();
mongoose.connect('mongodb://127.0.0.1:27017/demo')

app.use(express.json());

const demoSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    brand:String
});

const demoModel = mongoose.model('demo_collection',demoSchema);


app.get('/search/:key', async (req,res)=>{
    console.log(req.params.key);
    let data = await demoModel.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data);
    console.log(data);
})

app.listen(5000);


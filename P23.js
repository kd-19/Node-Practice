//Basic demo of Schema & Model

const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    const demoSchema = new mongoose.Schema({
        name:String,
        price:Number
    });

    const demoModel = mongoose.model('demo_collection',demoSchema);
    let data = new demoModel({name:'Poco edge30', price:'30000'});
    let result = await data.save();
    console.log(result);
}

main();
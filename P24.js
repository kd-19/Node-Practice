// CRUD in mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/demo');
    const demoSchema= new mongoose.Schema(
        {
            name:String,
            price:Number,
            category:String,
            brand:String
        }
    );

const saveInDB = async () =>{
    
    const demoModel = mongoose.model('demo_collection',demoSchema);
    const data =[
            {name:"S23",price:110000, brand:"Samsung", category:"mobile"},
            {name:"X90",price:60000, brand:"Vivo", category:"mobile"},
            {name:"Tuff",price:130000, brand:"Asus", category:"laptop"}
    ];

        let result = await demoModel.create(data);
        console.log(result);
}


const updateInDB = async () =>{
    const demoModel  = mongoose.model('demo_collection',demoSchema);
    let data = await demoModel.updateOne(
        {name:"S23"},
        {$set:{name:"S23 Pro" ,price:125000,}}
    )

    console.log(data);
}

const deleteInDB = async () =>{
    const demoModel = mongoose.model('demo_collection',demoSchema);
    let data = await demoModel.deleteOne(
        {name:'Poco edge30'}
    )
    console.log(data);
}

const findInDB = async ()=>{
    const demoModel = mongoose.model('demo_collection',demoSchema);
    let data= await demoModel.find();
    console.log(data);
}


//saveInDB();

//updateInDB();

//deleteInDB();

findInDB();
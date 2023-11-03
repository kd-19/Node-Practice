//MongoDB connection

const {MongoClient} =require('mongodb');
//const url= 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';


const database='demo';
const client= new MongoClient(url);

async function getData(){

    let result=  await client.connect();
    let db =result.db(database);
    let collection=db.collection('demo_collection');
    let response=await collection.find({}).toArray();
    console.log(response);
   
}

getData();
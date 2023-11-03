//Common file for database connect

const {MongoClient} =require('mongodb');
const url = 'mongodb://127.0.0.1:27017';


const database='demo';
const client= new MongoClient(url);

async function dbConnect(){
    let result=  await client.connect();
    let db =result.db(database);
    return db.collection('demo_collection');

}

module.exports=dbConnect;
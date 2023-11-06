//Delete data in mongoDB 

const dbConnect = require('./mongodb.');

const deleteData=async ()=>{
    const data= await dbConnect();
    const result = await data.deleteMany({name:"iPhone 15"});
    console.warn(result);
}

deleteData();
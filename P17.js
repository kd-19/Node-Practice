//Update data in Mongodb

const dbConnect= require('./mongodb');

const updateData = async ()=>{
    const data= await dbConnect();
    const result = await data.updateOne(
            {name:'iPhone 14'}, 
            {$set:{name:'iPhone 14 Pro'}}
        
    );
    console.warn(result);
}

updateData();
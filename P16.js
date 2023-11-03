//Insertion in MongoDb 

const dbConnect= require('./mongodb');

const insert =async ()=>{
    const db=await dbConnect();
    const result= await db.insertMany(
        [
            {name:'iPhone 15', brand:'Apple', price:'120000'},
            {name:'iPhone 14', brand:'Apple', price:'100000'},
            {name:'iPhone 13', brand:'Apple', price:'80000'}
        ]
        );
     console.log(result);   
}

insert();
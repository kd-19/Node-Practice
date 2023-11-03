//Application level middleware

const express = require('express');
const app = express();

const reqFilter= (req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter your age. ");
    }
    else if(req.query.age < 18){
        res.send("You can't access this page because your age is below 18");
    }
    else{
        next();
    }
}

app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send("Welcome to home page");
})

app.get('/about',(req,resp)=>{
    resp.send("Welcome to about page");
})


app.listen(5000);
//Router Level Middleware

const express= require('express');
const app= express();

const reqFilter =(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide your age.");
    }
    else if(req.query.age<18){
        res.send("You are below 18 , so you can't access this page.")
    }
    else{
        next();
    }
}

app.get('/',(req,res)=>{
    res.send('Welcome to HOME page');
});

app.get('/about',(req,res)=>{
    res.send('Welocme to ABOUT page');
})

app.get('/user', reqFilter ,(req, res)=>{
    res.send('Welcome to USER page');
})

app.listen(5000);
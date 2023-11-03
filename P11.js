//Access static page without extension & 404 Page creation

const { profile } = require('console');
const express = require('express');
const path=require('path');

const app= express();

app.set('view engine','ejs');

const publicPath=path.join(__dirname,'public');

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(req,res)=>{
    const user={
        name:'KD',
        email:'kd@user.com'
    }
    res.render('profile',{user});
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(4500);
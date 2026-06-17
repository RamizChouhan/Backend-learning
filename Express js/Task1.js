const express = require('express');
const app = express();
const port = 3400;

app.get("/",(req,res)=>{
    res.setHeader("content-type","text/plain");
    res.status(200).send("Hello Ramiz");
});

app.get("/about",(req,res)=>{
    res.setHeader("content-type","text/plain");
    res.status(200).send("about page");
});

app.listen(port,()=>{
    console.log("Server Running on Port http://localhost:3400");
})
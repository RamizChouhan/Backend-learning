const express = require('express');
const path = require('path');
const app = express();
const users = require("./MOCK_DATA.json");
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/users",(req,res)=>{
    res.json(users);
})

app.listen(3600,()=>{
    console.log("server running on http://localhost:3600");
});
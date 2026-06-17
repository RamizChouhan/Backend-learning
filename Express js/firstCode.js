const http = require("http");
const express = require("express"); //yaha ham ek function ko bula rahe hai ya function ek object return krta hai
const app = express(); //function call hua function ne return kiya obj jo app mein store hua is obj mein methods attech hai
//jo methods hai object ke andar woh 2 parameter lete hai ek path aur ek callback function [callback function req and res handle karta hai]
app.get("/",(req,res)=>{
    return res.send("Home page");
});

app.get("/about",(req,res)=>{
    return res.send(`hey user ${req.query.name}`);
});


app.listen(3500,()=>{
      console.log("server running on http://localhost:3500");
})
// const server = http.createServer(app);

// server.listen(3500,()=>{
//     console.log("server running on http://localhost:3500");
// })




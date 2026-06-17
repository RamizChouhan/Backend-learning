const express = require('express');
const fs = require("fs");
const app = express();
const path = require("path");
// const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const { type } = require('os');
const { emit } = require('cluster');
const { json } = require('stream/consumers');
const { timeStamp } = require('console');
const PORT = 8000;
const db = path.join(__dirname,"MOCK_DATA.json");
//connection MongoDB 
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=>console.log("MongoDB Connected"))
.catch((err)=> console.log("Mongo Error :",err));

const userSchema = new mongoose.Schema({
  first_name:{
    type:String,
    required:true,
  },
  last_name:{
    type:String,
  },

  email:{
    type:String,
    required:true,
    unique:true,
  },

  gender:{
    type:String,
  },
  JobTitle:{
    type:String,
    required:true,
  },
},{timeStamp:true});


const User = mongoose.model("user",userSchema);
//middleware - plugin
app.use(express.urlencoded({extended:false})); //Form se aane wale data ko read karke usable format me convert karna

// app.use(express.json());
// app.use((req,res,next)=>{
//     console.log("Hello from middleware 1");
//      next(); // next middleware / route method ko call kregi automatically
// });

// app.use((req,res,next)=>{
//     console.log("hello from middleware 2");
//     // return res.end("hey");
//     next();
// });

app.use((req,res,next)=>{
    fs.appendFile("log.txt",`\n ${Date.now()} : ${req.method} : ${req.path}`,(err,data)=>{
        next();
    });
})
//ROUTES

app.get("/users",async (req, res) => {
    const allDBusers = await User.find({});
    const html = `<ul>

        ${allDBusers.map((user) => `<li>${user.first_name}</li><br>
        <li>${user.last_name}</li><li>${user.email}</li>`).join("")}
     </ul>
    `

    return res.send(html);
});


app.get("/api/users", (req, res) => {
    // (recommended in Express to set + status + send);
    console.log(req.headers); // get headers to client
  return   res.status(200).set("custom-header","data sending").json(users)  // send hearder from server

    // return res.json(users);
});


app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return res.json(user);
})

app.post("/api/users", async (req, res) => {
    //TODO : Create new user
     const body = req.body;
    //   users.push({...body,id:users.length+1});
    //   fs.writeFile(db,JSON.stringify(users), (err,data)=>{
    //     if(err){
    //         return err;
    //     }
    //    return res.json({status:"success",id:user.length});
    //   })  without mongodb 
   
    if(!body || 
       !body.first_name ||
       !body.last_name ||
       !body.email ||
       !body.gender || 
       !body.Job_title 
    ){
        return res.status(400).json({msg:"All Fields are required..."});
    }

   const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        JobTitle:body.JobTitle,
        gender:body.gender,
    });
     console.log("result :",result);
    return res.status(201).json({msg:"success"});
});

app.patch("/api/users/:id", (req, res) => {
    //TODO : edit the user with id
    return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
    const id =  Number(req.query.id);
    users.filter((user)=>{
        user.id !== id;
    });
    
   
    return res.json({ status: "success" });
});


//short cut for same path/api
// app
//    .route("/api/users/:id")
//    .get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// }).patch((req, res) => {
//     //TODO : delete the user with id 
//     return res.json({ status: "pending" });
// }).delete((req, res) => {
//     //TODO : delete the user with id 
//     return res.json({ status: "pending" });
// });

app.listen(PORT, () => console.log(`Server Started at PORT http://localhost:${PORT} `))
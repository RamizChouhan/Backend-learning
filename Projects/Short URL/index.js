const express = require("express");
const path = require("path");
const { connectToMongoDB} = require("./connect");
const urlRoute = require("./Routes/url");
const staticRouter = require("./Routes/StaticRouter");
const URL = require('./Models/url');
const app = express();
const PORT = 8001;



connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=>console.log("MongoDB Connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/url",urlRoute);
app.use("/",staticRouter);

app.get("/url/:shortId",async (req,res)=>{
   const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
     shortId,
   },{$push:{
      visitHistory:{
          timeStam:Date.now(),
      },
   }});

   res.redirect(entry.redirectURL);
})
app.listen(PORT,()=>{
     console.log(`Server Started At PORT http://localhost:${PORT}`);
});
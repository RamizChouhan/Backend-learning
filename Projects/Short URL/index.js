const express = require("express");
const app = express();
const path = require("path");
const URL = require('./Models/url');
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middleware/auth");
const PORT = 8001;
const { connectToMongoDB } = require("./connect");

const staticRouter = require("./Routes/StaticRouter");
const urlRoute = require("./Routes/url");
const userRoute = require("./Routes/user");


connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", checkAuth, staticRouter);
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);


app.get("/url/:shortId", async (req, res) => {
   const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate({
      shortId,
   }, {
      $push: {
         visitHistory: {
            timeStam: Date.now(),
         },
      }
   });

   res.redirect(entry.redirectURL);
})
app.listen(PORT, () => {
   console.log(`Server Started At PORT http://localhost:${PORT}`);
});
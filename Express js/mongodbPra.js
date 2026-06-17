
const express = require('express');
const {connectionMongDb} = require("./connection.js");

const {logReqRes} = require("./Middlewares");
const userRouter = require("./Routes/user");

const app = express();
const PORT = 3400;


//connection
connectionMongDb("mongodb://127.0.0.1:27017/Instgram-app-1")

//Routes
app.use("/user",userRouter);

//middleware - Plugin
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logReqRes("log.txt"));


app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}`);
})
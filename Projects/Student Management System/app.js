const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Studentroute = require("./Routers/student");
const PORT = 4001;

mongoose.connect("mongodb://127.0.0.1:27017/Student-Management")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use("/student", Studentroute);
app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}`);
})
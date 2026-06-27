const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const StudentRoute = require("./Routers/student");
const StaticRouter = require("./Routers/StaticRouter");
const UserRoute = require("./Routers/user");
const cookieParser = require("cookie-parser");

const {restrictToLoggedinUserOnly,checkAuth} = require("./middleware/auth");
const PORT = 4001;

mongoose.connect("mongodb://127.0.0.1:27017/Student-Management")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
// Public
app.use("/", StaticRouter);
app.use("/user", UserRoute);

// Protected
app.use("/student", restrictToLoggedinUserOnly, StudentRoute);

app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}`);
})
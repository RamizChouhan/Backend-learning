const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const path = require("path");
const fs = require("fs");
const db = path.join(__dirname, "MOCK_DATA.json");
let count = 0;
//2 task & task 7
app.use((req, res, next) => {
    if (req.path === "/admin") {  //task 4
        console.log("Admin route accessed");
    }

    if (req.query.token !== "123") {
        return res.send("Unauthorized");
    }
    console.log(`Method : ${req.method} Path : ${req.url}`);
    count++; // task 9 to increase count for every request
    next();

});

app.use(express.json());
// function AdminMiddleWare(req,res,next){
//     console.log("Admin route accessed");
//     next();
// }

//1 Task
app.get("/", (req, res) => {

    res.send("Welcome Ramiz");
});

app.get("/contact", (req, res) => {

    res.send("Contact Page");
});

app.get("/about", (req, res) => {

    res.send("About page");
});


//3 task

app.get("/user", (req, res) => {
    res.json({ name: "ramiz", age: 20 });
});

app.get("/admin", (req, res) => {
    res.send("Admin Page");
});

//task 5
app.get("/product/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = data.filter((data) => {
        return data.id === id;
    });
    res.json(user);
});

//task 6
app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Searching for ${name} of ${age}`);
});

//task 9
app.get("/count", (req, res) => {
    res.send(`Total Request : ${count}`);

});

// task 10
app.get("/users", (req, res) => {
    res.json(data);
});

app.post("/users", (req, res) => {
    const body = req.body;
    data.push({ ...body, id: data.length + 1 });
    fs.writeFile(db, JSON.stringify(data), (err, data) => {
        if (err) {
            return err;
        }
        return res.json({
            status: "success",
            id: body.id
        });
    })
})
app.delete("/data/:id", (req, res) => {
    const id = Number(req.params.id);
    data.filter((user) => {
        return user.id !== id;
    });

    return res.json({ status: "success" });
});

app.listen(3900, () => {
    console.log("server run on http://localhost:3900");
})
const http = require("http");
const fs = require("fs");
const path = require("path");
const users = [
    {
        name: "Ramiz",
        email: "Ramiz34@gmail.com",
        Id: 101,
    },

    {
        name: "Raj",
        email: "Raj@gmail.com",
        Id: 102,
    },

    {
        name: "Karan",
        email: "karan42@gmail.com",
        Id: 103,
    },

    {
        name: "Rahul",
        email: "Rahul93@gmail.com",
        Id: 104,
    },
];
// const DataPath ="C:/Node.js/html/index.html"; agar mujhe ya aisa path manually nhi likhna hai to main path module use kar skta hun 
//jo ya sab aapne aap hi automatically handle karta hai path.join(___dirname,"html","index.html") 
//path.join [sab ko lekar join karke ek correct path banta hai] [1st , current folder,2nd jaha se lena hai woh folder,3th jo file use karna hai wo];

// const DataPath ="C:/Node.js/html/index.html";
const DataPath = path.join(__dirname, "html", "index.html");
// fs.readFile(DataPath,"utf-8",(err,data)=>{

//          if(err){
//             console.log(err);
//             return;
//          }else{
//             console.log(data);
//          }
// })  
//check data mil raha hai ki nhi

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        
        fs.readFile(DataPath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                console.log(err);
                return;
            }
        res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { "Content-Type ": "text/plain" });
        res.end("ERROR ! 404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})
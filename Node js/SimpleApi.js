// Server Response = server ka reply client ko

// jab client (browser) request bhejta hai
// server uska answer deta hai → isi ko response kehte hain

// response ke bina request complete nahi hoti
// browser wait karta rahega

// response me 3 cheeze hoti hain:
// 1. data (body)
// 2. status code (200, 404, 500)
// 3. headers

// res.end() → response bhejne ke liye use hota hai

// example:
// res.end("Hello Ramiz"); → client ko data bhej diya

// main purpose:
// client ko data dena aur request-response cycle complete karna

// short yaad rakh:
// request aata hai → response jata hai

const http = require("http");

const data = [
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
const server = http.createServer((req, res) => {


    if (req.url === "/") {
         
          res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>Go Api Route To See Users Data </h2>");


    } else if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Contenct-Type": "application/json" });

        res.write("<h1>Users Data </h1>");
        res.end(`<pre>${JSON.stringify(data,null,2)}</pre>`);
    } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ "Error !": "Route Not Found" }));
    }
});

server.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
})
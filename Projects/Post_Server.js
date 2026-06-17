const http = require("http");
const fs = require("fs");
const path = require("path");

let users = [
    {
        name: "Ramiz",
        email: "Ramiz34@gmail.com",
        Id: 101,
    },
];

const LoginFormPath = path.join(__dirname, "index.html");
const userdb = path.join(__dirname, "UserDb.txt");
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        fs.readFile(LoginFormPath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                console.log(err);
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/script.js" && req.method === "GET") {
        const scriptPath = path.join(__dirname, "script.js");

        fs.readFile(scriptPath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading script");
                return;
            }
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.end(data);
        });
    } else if (req.url === "/add-user" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const NewUser = JSON.parse(body);

            users.push(NewUser);


            fs.appendFile(userdb, body + "\n", (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                res.writeHead(200, { "content-type": "text/plain" });
                res.end("Data Submitted Successfully");
            });

        });


    } else if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("ERROR ! 404 Not Found");
    }
});

server.listen(3500, () => {
    console.log("Server Running On http://localhost:3500");
})
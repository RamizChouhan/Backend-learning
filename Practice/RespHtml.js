const http = require("http");
const fs = require("fs");
const path = require("path");

const indexFile = path.join(__dirname,"index.html");
console.log(indexFile);

const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
      fs.readFile(indexFile , "utf-8",(err,data)=>{
        if(err){
            res.writeHead(404,{"content-type":"text/plain"});
            res.end("Error! Not Found Data");
            return
        }else{
            res.writeHead(200,{"content-type":"text/html"});
          return  res.end(data);
        }
      })
    }
});

server.listen(3500,()=>{
    console.log("Server Running On http://localhost:3500");
})
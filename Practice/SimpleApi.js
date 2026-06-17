const http = require("http");
const data = [{"Name":"Raj","age":20,"Proffessional":"Software Engineer"}];
const server = http.createServer((req,res)=>{
    if(req.url === "/api" && req.method === "GET"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(data,null,2));
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("Not Existed");
    }
});

server.listen(3400,()=>{
    console.log("Server Running On http://localhost:3400");
})
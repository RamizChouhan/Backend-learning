const http = require("http");

function handler(req,res){
        
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Home Page ");
    }else if(req.url === "/about"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("About Page");
    }else {
    res.writeHead(404, {"content-type":"text/plain"});
    res.end("Page Not Found");
}

}

const server = http.createServer(handler);

server.listen(3200,()=>{
    console.log("server running on http://localhost:3200");
})
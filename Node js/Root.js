const http = require("http");
const user = require("./Form");
http.createServer((req,res)=>{
user(req,res)
res,end()
}).listen(3400);
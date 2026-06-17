// const agr = process.argv;

// console.log("name : ",agr[2]);

const arg = process.argv;

const port = arg[2];
const http = require('http');
 http.createServer((req,res)=>{
    res.end("Dynamic Port Run");
}).listen(port);


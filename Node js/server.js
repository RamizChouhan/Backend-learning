const http = require("http");
const fs = require("fs");
// const url = require("url"); // modern mein kis ki zarurat nhi hoti q ki ya new URL ya ek global constructor hai
// Originally ye Web API (browser) ka part tha
// Node.js ne bhi ise adopt kar liya (same behavior ke saath)
const server = http.createServer((req, res) => {
    const data = `Date :${Date.now()} - Path :${req.url} - Method :${req.method} - MetaData :${req.headers}: New Request Received \n`;
    const parsedUrl = new  URL(req.url, `http://${req.headers.host}`);  // new modern

    if (req) {
        // console.log(parsedUrl); 
        // console.log("pathname :",parsedUrl.pathname); //old 
        // console.log("Query :",parsedUrl.query);  old
        console.log("pathName :", parsedUrl.pathname);//modern
          console.log("query params get :",parsedUrl.searchParams.get("id"));//modern
        fs.appendFile("log.txt", data, (err) => {
            console.log(err);
            return;
        });
    };

     if(req.url === "/favicon.ico"){
         res.end();
         return 0;
    }

    res.writeHead(200, {
        "content-type": "text/plain"
    });

    switch (req.url) {
        case "/": res.end("Home data ");
            break;

        case "/main": res.end("Main Internal Data");
            break;

        default: res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});
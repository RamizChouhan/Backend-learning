const os = require("os");

console.log(os.cpus().length); 

//WRITE IN FILE
//SyncFile...
// fs.writeFileSync("test.txt","hey Node Developer");


//AsyncFile...
// fs.writeFile("./test.txt","hey Web Developer", (err)=>{
//     return err;
// });


//READ FROM FILE
// //SyncRead ya return karta hai data 
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

//Async Ya return isko callback function chahiye callback 2 parameter leta hai 1s error ke lye 2s data ke liye
// fs.readFile("test.txt","utf-8" , (err,data)=>{
//     if(err){
//         console.log("ERROR !",err);
//     }else{
//         console.log(data);
//     }
// });

//Sync AppendData In file 
// fs.appendFileSync("test.txt","ramiz   chouhan    18/4/2005    ramizchouhan13@gmail.com");


//Async Append Data in file
// fs.appendFile("test.txt","saniya   chouhan    18/4/2005    ramizchouhan13@gmail.com \n", (err)=>err);


//Copy file using Fs module
// fs.copyFile("test.txt" , "copy.txt",(err)=>err);


//delete file using fs module
// fs.unlink("./copy.txt",(err)=>err);

//make Folders / Directory
// fs.mkdir("docs",(err)=> console.log(err));



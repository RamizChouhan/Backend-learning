const User = require("../Models/user");
const {setUser} = require("../Service/auth");
const {v4:uuidv4} = require("uuid");
async function handleUserSignUp(req,res){
    const{name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).send("All fields are required");
    };

    User.create({
        name,
        email,
        password
    });

    return res.redirect("/student");
};

async function handleUserLogin(req,res){
   const {email,password} = req.body;
   if(!email || !password){
    return res.status(400).send("All field Are Required");
   };

   const user = await User.findOne({email,password});
   if(!user){
     return res.render("login",{
        "error":"Invalid Username Or Password",
     });
   };
     
    //statefull authentication
//    console.log("handleuserlogin  function hit");
//    const sessionId = uuidv4();
//    setUser(sessionId,user);
//    res.cookie("uid",sessionId); 
      const  token = setUser(user);
      res.cookie("uid",token);
   return res.redirect("/student");
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}
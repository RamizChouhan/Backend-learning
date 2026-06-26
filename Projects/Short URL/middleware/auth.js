const { getUser } = require("../Service/auth");

async function restrictToLoggedinUserOnly(req, res, next) { //url ke liye 
    const userUid = req.cookies?.uid;
    if (!userUid) return res.redirect("/login");
   
    const user = getUser(userUid);
    
    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

//Ye user ko forcefully login nahi karwata
async function checkAuth(req, res, next) { // user login hai ya nhi check karne ke liye 
    const userUid = req.cookies?.uid;

    const user = getUser(userUid);
    console.log("middleware folder auth file checAuth user :",user);
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
}
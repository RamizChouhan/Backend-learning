const { getUser } = require("../Service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid) return res.redirect("/login");
   
    const user = getUser(userUid);
    console.log("user Uid :",userUid);
    

    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
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
const {getUser} = require("../Service/auth");

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = await req.cookies?.uid;

    if(!userUid) return res.render('login');

    const user = getUser(userUid);

    if(!user) return res.render('login');

    req.user = user;

    next();
}

async function checkAuth(req,res,next){
    const userUid = await req.cookies?.uid;

    const user = getUser(userUid);

    req.user = user;

console.log(req.user);

    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth
}
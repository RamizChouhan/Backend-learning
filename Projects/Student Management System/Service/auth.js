// const sessionIdToUserMap = new Map();

 //statefull authentication 
// function setUser(id,user){
//     return sessionIdToUserMap.set(id,user);
// }

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

//stateless authentication

const jwt = require("jsonwebtoken");
const secret = "ramiz$123@$";

function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email},
      secret,
    );
}

function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }catch(error){
        return error;
    }
}



module.exports = {
    setUser,
    getUser
}
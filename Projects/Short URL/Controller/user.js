const User = require('../Models/user');
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../Service/auth")
async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send("All fields are required");
    }
    await User.create({
        name,
        email,
        password,
    });


    return res.redirect('/');
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email, password });
    if (!user) {
        return res.render("login", {
            error: "Invalid Username or Password",
        })
    }
    const sessionId = uuidv4();


    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect('/');
}


module.exports = {
    handleUserSignUp,
    handleUserLogin,
}
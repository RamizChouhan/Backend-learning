const express = require("express");
const router = express.Router();
const {handleUserSignUp,handleUserLogin} = require("../Controllers/user");

router.post("/",handleUserSignUp);

router.post("/login",handleUserLogin);

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/create",(req,res)=>{
    return res.render('AddStudent');
});

router.get("/signup",(req,res)=>{
    return res.render('signup');
});

router.get("/login",(req,res)=>{
    return res.render('login');
});

module.exports = router;

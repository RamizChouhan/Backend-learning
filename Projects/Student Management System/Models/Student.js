const mongoose = require("mongoose");

const StudentDetails = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Id:{
        type:Number,
        required:true,
        unique:true
    }
});

const Student = mongoose.model("student",StudentDetails);

module.exports = Student;
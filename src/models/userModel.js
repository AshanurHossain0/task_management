const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
        maxLength : 15,
        trim : true
    },
})

module.exports = mongoose.model( 'User' , userSchema )
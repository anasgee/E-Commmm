const mongoose = require("mongoose");
const validator  =require("validator");


const userSchema = new mongoose.Schema({


    name:{
        type:String,
        required:[true,"Name is Required"],
        maxLength:[30,"name cannot exceeds 30 characters"],
        minLength:[4,"Name should be minimum 4 characters"],
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid email address"],
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        minLength:[8,"Password should be minimum 8 characters"],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,


})

module.exports=mongoose.model("User",userSchema);
const mongoose = require("mongoose")
const UserModel = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})
const User = mongoose.model("User",UserModel)
module.exports = User
const mongoose = require("mongoose")
const {Schema} = mongoose
const UserModel = new Schema({
    name:{
        type:String,
        require:true,
        split:true
    },
    email:{
        type:String,
        require:true,
        split:true,
        unique:true
    },
    phone:{
        type:String,
        require:true,
        split:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        split:true,
        min:6,
        max:20
    }
},{timestamps:true,versionKey:false})
const User = mongoose.model("User",UserModel)
module.exports = User
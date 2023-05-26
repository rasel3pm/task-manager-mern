const mongoose = require("mongoose")
const {Schema} = mongoose
const UserModel = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:4,
        max:20
    }
},{timestamps:true,versionKey:false})
const User = mongoose.model("User",UserModel)
module.exports = User
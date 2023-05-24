const mongoose = require("mongoose")
const {Schema} =mongoose
const taskModel = new Schema({
    title:{
        type:String,
        require:true,
        split:true
    },
    description:{
        type:String,
        require:true,
        split:true
    },
    author:{
        type:String,
        require:true,
        split:true
    },
},{timestamps:true,versionKey:false})
const Task = mongoose.model("Task-manager",taskModel)
module.exports = Task
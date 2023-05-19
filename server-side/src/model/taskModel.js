const mongoose = require("mongoose")
const taskModel = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
},{timestamps:true})
const Task = mongoose.model("Task-manager",taskModel)
module.exports = Task
const Task = require("../model/taskModel")
//create task
exports.createTask= async (req,res)=>{
        try{
            const {title,description,author}= req.body
            const post = await new Task({
                title,
                description,
                author
            })
            const data = await post.save()
            res.status(200).json({message:"Task create success",data})
        }catch (err) {
            res.status(404).json({error:"Something went wrong",err})
        }
}
//get all task
exports.getTask= async (req,res)=>{
    try {
        const task= await Task.find()
        if(task){
            res.status(202).json({message:"Success get task",task})
        }
    }catch (err){
        res.status(404).json({error: "Failed to get all task"})
    }
}
//get task by id
exports.getTaskById = async (req,res)=>{
    try{
        const taskId = req.params.id
        const findTask = await Task.findById({_id:taskId})
        if(findTask){
            res.status(200).json({message:"find task by Id",findTask})
        }
    }catch (err){
        console.log(err)
    }
}
//update task by Id
exports.updateTask = async (req,res)=>{
    try{
        const taskId = req.params.id
        const updateTask =await Task.findByIdAndUpdate({_id:taskId},{$set:req.body},{new:true})
        await updateTask.save()
        res.status(200).json({message:"Success update task",updateTask})
    }catch (err){
        res.status(404).json({error: "Failed to update task by id---",err})
    }
}
//delete task by Id
exports.deleteTask = async (req,res)=>{
    try {
        const taskId = req.params.id
        const taskDelete = await Task.findByIdAndDelete({_id:taskId})
        if(taskDelete){
            res.status(200).json({message:"Success delete post",taskDelete})
        }
    }catch (err) {
        console.log(err)
    }
}
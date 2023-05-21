const jwt = require("jsonwebtoken")
const userAuthentication =(req,res,next)=>{
    const token = req.headers["token"]
    if(!token){
        return res.status(401).json({message:"No token provided"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if(err){
            return res.status(201).json({message:"No token provided"})
        }
        req.user.decode
        next()
    })
}
module.exports =userAuthentication
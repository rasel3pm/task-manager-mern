const User = require("../model/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cloudinary = require("../utility/cloudinaryConfig")
exports.createAccount = async (req,res)=>{
    try{
        const {name,email,phone,password,image }=req.body
        //find user with email
        const exsisUser = await User.findOne({ email: email });
        if (exsisUser) {
            throw error("Already have an account", 400);
        }
        //encrypt password using bcrypt
        const salt =await bcrypt.genSalt(10)
        const hash =await bcrypt.hash(password,salt)
        req.body.password= hash

        //cloudinary image hosting connect
        let imageCloud = await cloudinary.uploader.upload(req.file.path,{folder: "uploads"})
        const addUser = await new User({
            name,
            email,
            phone,
            password:hash,
            image: {
                publicID: imageCloud.public_id,
                url: imageCloud.secure_url,
            },
        })
        const user =await addUser.save()
        res.status(200).json({message:"Account create success",user})
    }catch (err) {
        res.status(404).json({error:"Something went wrong",err})
    }
}

exports.loginAccount = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.find({ email: email });
        if (user && user.length > 0) {
            const validPassword = await bcrypt.compare(password, user[0].password);
            if (validPassword) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );
                res.cookie("access_token", token, {
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: true // Set to true if using HTTPS
                }).json({ access_token: token, message: "Login Success" });
            } else {
                res.status(401).json({ message: "wrong email or password" });
            }
        } else {
            res.status(401).json({ message: "wrong email or password" });
        }
    } catch (err) {
        res.status(401).json({ message: "wrong email or password" });
    }
};
const multer = require("multer");

const storage = multer.diskStorage({
    //define file save folder
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname) //file save will be original name
    },
})
//file filtering option
 const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true)
    }else {
        cb({ message: "Unsupported file format" }, false);
    }
}
const upload = multer({
    storage:storage,
    limits:{fileSize : 1024 * 1024},
    fileFilter:fileFilter
})
module.exports = upload

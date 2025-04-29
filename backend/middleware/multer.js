// @ts-nocheck
import multer from "multer";
const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})
const upload = multer({storage})

export default upload

// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads'); // Ensure './uploads' exists
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + '-' + file.originalname); // Give unique filename
//   }
// });

// const upload = multer({ storage });
// export default upload;

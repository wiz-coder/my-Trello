import multer from "multer"

//file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

//file validation
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
        cb(null, true);
    } else {
        cb({error:'[upload failed]: unsupported file format'}, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter,limits:{fileSize:1024*1024} })

export default upload
const express = require('express');
const multer = require('multer');
const router = express.Router();

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname)
    }
})

let uploader = multer({storage})

// en uploader.arrays('files') puedo subir varios archivos al mismo tiempo
router.post('/', uploader.single('file'), (req, res) => {
    res.send({ message: "sUBIDOO" })
})

module.exports = router;
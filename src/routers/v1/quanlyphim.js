const express = require('express')
const { getbanner, getdanhsachphim, getlaydanhsachphimtheongay, postcapnhatphimmoi, postcapnhatphim, deletephim,postcapnhathinhphim } = require('../../controllers/quanlyphimcontroller')

const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/img");
    },
    filename: (req, file, cb) => {
        //nên đặt tên file upload theo ngày tháng năm giờ phút giây để tên file không bị trùng lặp
        const fileNewName = Date.now() + "_" + file.originalname;
        cb(null, fileNewName);
    }
})


const upload = multer({ storage });

const quanlyphim = express.Router();

quanlyphim.get('/laysangsachbanner', getbanner)
quanlyphim.get('/laydanhsachphim', getdanhsachphim)
quanlyphim.get('/laydanhsachphimtheongay/:id', getlaydanhsachphimtheongay)
quanlyphim.post('', postcapnhatphimmoi)
quanlyphim.put('/capnhatphimupload/:id', postcapnhatphim)
quanlyphim.delete('/xoaphim/:id', deletephim)

quanlyphim.post('/upload', upload.single("image"), (req, res) => {

    res.status(200).send(req.file.filename)
})


quanlyphim.post("/upload/:id",upload.single("image"), postcapnhathinhphim)

module.exports = quanlyphim
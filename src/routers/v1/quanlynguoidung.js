const express = require('express')

const {signUp,login} =require('../../controllers/quanlynguoidungconllers')

const quanlynguoidung=express.Router()

quanlynguoidung.post('/dangky',signUp);
quanlynguoidung.post('/dangnhap',login);



module.exports= quanlynguoidung
const express = require('express')
const {getbanner,getdanhsachphim,getlaydanhsachphimtheongay,postcapnhatphimmoi,postcapnhatphim,deletephim} = require('../../controllers/quanlyphimcontroller')

const quanlyphim =express.Router();

quanlyphim.get('/laysangsachbanner',getbanner)
quanlyphim.get('/laydanhsachphim',getdanhsachphim)
quanlyphim.get('/laydanhsachphimtheongay/:id',getlaydanhsachphimtheongay)
quanlyphim.post('',postcapnhatphimmoi)
quanlyphim.put('/capnhatphimupload/:id',postcapnhatphim)
quanlyphim.delete('/xoaphim/:id',deletephim)
module.exports= quanlyphim
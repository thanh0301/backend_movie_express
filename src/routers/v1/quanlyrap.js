
const express = require('express')
const quanlyrap=express.Router();
const { getthongtinhethongrap ,getcumraptheohethongrap} = require('../../controllers/quanlyrapcontrollers')




quanlyrap.get('/laythongtinhethongrap',getthongtinhethongrap)
quanlyrap.get('/cumraptheohethongrap/:id',getcumraptheohethongrap)



module.exports=quanlyrap
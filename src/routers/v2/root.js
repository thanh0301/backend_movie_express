const express=  require('express')
const rootRouter= express.Router()


const quanlydatve = require('../v1/quanlydatve')
const  quanlyrap=require('../v1/quanlyrap')
const quanlyphim=require('../v1/quanlyphim')
const quanlynguoidung= require('../v1/quanlynguoidung')
rootRouter.use('/quanlydatve',quanlydatve)
rootRouter.use('/quanlyrap',quanlyrap)
rootRouter.use('/quanlyphim',quanlyphim)
rootRouter.use('/quanlynguoidung',quanlynguoidung)


module.exports =rootRouter
const express=  require('express')
const rootRouter= express.Router()


const quanlydatve = require('../v1/quanlydatve')
const  quanlyrap=require('../v1/quanlyrap')

rootRouter.use('/quanlydatve',quanlydatve)
rootRouter.use('/quanlyrap',quanlyrap)




module.exports =rootRouter
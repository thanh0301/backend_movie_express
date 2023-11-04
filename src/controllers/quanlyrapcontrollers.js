

const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const { successCode, errorCode, failCode } = require('../ulti/response');

const getthongtinhethongrap = async(req,res) => {

    let data = await model.HeThongRap.findAll();
    successCode(res,data,'ok')
}

const getcumraptheohethongrap = async(req,res) => {
    const { id } = req.params;
    let data = await model.CumRap.findAll({
        include: ["ma_he_thong_rap_HeThongRap"],
        where: {
            ma_he_thong_rap: id
        }
    });
    successCode(res,data,'ok')
}


module.exports={
    getthongtinhethongrap,
    getcumraptheohethongrap
}
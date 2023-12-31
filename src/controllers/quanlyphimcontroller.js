const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const { successCode, errorCode, failCode } = require('../ulti/response');



const getbanner = async (req, res) => {

    try {
        const data = await model.Banner.findAll();

        successCode(res, data, 'ok')
    } catch (error) {

        failCode(res, 'err')
    }

}

const getdanhsachphim = async (req, res) => {

    try {
        const data = await model.Phim.findAll();
        successCode(res, data, 'ok')
    } catch (error) {
        failCode(res, error, 'erro')
    }
}

const getlaydanhsachphimtheongay = async (req, res) => {

    try {
        const { id } = req.params;
        const data = await model.Phim.findAll({
            where: {
                ngay_khoi_chieu: id
            }
        });
        successCode(res, data, 'ok')
    } catch (error) {
        failCode(res, error, 'erro')
    }

}

const postcapnhatphimmoi = async (req, res) => {

    const { ten_phim, hinh_anh, mo_ta, ngay_khoi_chieu, dang_gia, hot, dang_chieu, sap_chieu } = req.body;

        
    const data = await model.Phim.create({ ten_phim, hinh_anh, mo_ta, ngay_khoi_chieu, dang_gia, hot, dang_chieu, sap_chieu })

    try {
        successCode(res, data, 'ok')
    } catch (error) {

    }
}
const postcapnhatphim = async (req, res) => {
    const { id } = req.params
    const { ten_phim, hinh_anh, mo_ta, ngay_khoi_chieu, dang_gia, hot, dang_chieu, sap_chieu } = req.body;

    const data = await model.Phim.findByPk(id)

    if (data) {
        await model.Phim.update({ ten_phim, hinh_anh, mo_ta, ngay_khoi_chieu, dang_gia, hot, dang_chieu, sap_chieu }, {
            where: {
                ma_phim: id
            }

        })
        const data2 = await model.Phim.findByPk(id)
        successCode(res,data2, 'ok')
    }
}

const deletephim  =async (req, res) => {
    const { id } = req.params;

    const data = await model.Phim.destroy({
        where:{
            ma_phim:id
        }
    });

    successCode(res,data,'ok')
}

const postcapnhathinhphim= async (req,res) =>{
    const { filename } = req.file;
    const { id } = req.params;

    let getData = await model.Banner.findByPk(id);

    let object = { ...getData, hinh_anh: `/public/img/${filename}` };
 
    await model.Banner.update(object,
        {
            where: {
                ma_banner: id
            }
        })
    successCode(res, filename)

}

module.exports = {
    getbanner,
    getdanhsachphim,
    getlaydanhsachphimtheongay,
    postcapnhatphimmoi,
    postcapnhatphim,
    deletephim,
    postcapnhathinhphim
}
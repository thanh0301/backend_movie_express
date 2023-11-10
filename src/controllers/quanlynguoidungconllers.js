const sequelize = require('../model/index');
const initModel = require('../model/init-models');
const model = initModel(sequelize);
const { successCode, errorCode, failCode } = require('../ulti/response');
const { hashPass,
    comparePass,
    generateToken,
    verifyToken,
    checkToken} = require('./authcontrollers');


const signUp = async (req, res) => {

    try {
        const { email, mat_khau } = req.body;

        let object = {
            email,
            mat_khau:hashPass(mat_khau)
        }

        const checkEmail = await model.NguoiDung.findAll({
            where: {
                email: email
            }
        })

        if (checkEmail.length > 0) {
            errorCode(res, "Email đã tồn tại");
        }
        else {
            const data = await model.NguoiDung.create(object);

            if (data)
                successCode(res, data , "Đăng ký thành công");
            else
                errorCode(res, "Đăng ký thất bại");

        }

    }
    catch {
        failCode(res);
    }

}

const login = async (req, res) => {

    const { email, mat_khau } = req.body;

    const checkEmail = await model.NguoiDung.findOne({
        where: {
            email
        }
    })

    if (checkEmail) {

       let pass_word = checkEmail.dataValues.mat_khau;

       let checkpassword = comparePass(mat_khau,pass_word)

        if(checkpassword){
               
            let token = generateToken(checkEmail.dataValues)
            successCode(res , token,'ok')
          
        }else{
            errorCode(res,'matkhaukhongdung')
        }

     

    } else {
        errorCode(res, "Email không đúng");
    }
}

module.exports = {
    
    signUp,
    login
}
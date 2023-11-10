const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs')
//mã hóa dữ liệu
const hashPass = (pass_word) => {

    return bcrypt.hashSync(pass_word, 10);

}

// hàm so sánh dữ liệu chưa mã hóa và dữ liệu đã mã hóa
// nếu đúng => true
// nếu sai => false
const comparePass = (pass_word, hashPassWord) => {
    return bcrypt.compareSync(pass_word, hashPassWord);
}

// tạo chuỗi jwt
const generateToken = (data) => {
   
    var token = jwt.sign(data, 'key', { algorithm: 'HS256'}, {expiresIn:'1h'});

    return token;
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, "key");
    } catch (err) {

        return false;
    }

}

const checkToken = (req, res, next) => {
    let { authentication } = req.headers;

    if (authentication) {
        if (verifyToken(authentication)) {
           // res.send(jwt.decode(authentication))
             next();
        } else {
            res.status(403).send("Token không hợp lệ");
        }

    }
    else {
        res.status(403).send("Token không hợp lệ");
    }
}

module.exports = {
    hashPass,
    comparePass,
    generateToken,
    verifyToken,
    checkToken

}
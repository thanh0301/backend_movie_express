const DataTypes = require("sequelize").DataTypes;
const _Banner = require("./Banner");
const _CumRap = require("./CumRap");
const _DatVe = require("./DatVe");
const _Ghe = require("./Ghe");
const _HeThongRap = require("./HeThongRap");
const _LichChieu = require("./LichChieu");
const _NguoiDung = require("./NguoiDung");
const _Phim = require("./Phim");
const _RapPhim = require("./RapPhim");

function initModels(sequelize) {
  const Banner = _Banner(sequelize, DataTypes);
  const CumRap = _CumRap(sequelize, DataTypes);
  const DatVe = _DatVe(sequelize, DataTypes);
  const Ghe = _Ghe(sequelize, DataTypes);
  const HeThongRap = _HeThongRap(sequelize, DataTypes);
  const LichChieu = _LichChieu(sequelize, DataTypes);
  const NguoiDung = _NguoiDung(sequelize, DataTypes);
  const Phim = _Phim(sequelize, DataTypes);
  const RapPhim = _RapPhim(sequelize, DataTypes);

  RapPhim.belongsTo(CumRap, { as: "ma_cup_rap_CumRap", foreignKey: "ma_cup_rap"});
  CumRap.hasMany(RapPhim, { as: "RapPhims", foreignKey: "ma_cup_rap"});
  DatVe.belongsTo(Ghe, { as: "ma_ghe_Ghe", foreignKey: "ma_ghe"});
  Ghe.hasMany(DatVe, { as: "DatVes", foreignKey: "ma_ghe"});
  CumRap.belongsTo(HeThongRap, { as: "ma_he_thong_rap_HeThongRap", foreignKey: "ma_he_thong_rap"});
  HeThongRap.hasMany(CumRap, { as: "CumRaps", foreignKey: "ma_he_thong_rap"});
  DatVe.belongsTo(LichChieu, { as: "ma_lich_chieu_LichChieu", foreignKey: "ma_lich_chieu"});
  LichChieu.hasMany(DatVe, { as: "DatVes", foreignKey: "ma_lich_chieu"});
  DatVe.belongsTo(NguoiDung, { as: "tai_khoang_NguoiDung", foreignKey: "tai_khoang"});
  NguoiDung.hasMany(DatVe, { as: "DatVes", foreignKey: "tai_khoang"});
  Banner.belongsTo(Phim, { as: "ma_phim_Phim", foreignKey: "ma_phim"});
  Phim.hasMany(Banner, { as: "Banners", foreignKey: "ma_phim"});
  LichChieu.belongsTo(Phim, { as: "ma_phim_Phim", foreignKey: "ma_phim"});
  Phim.hasMany(LichChieu, { as: "LichChieus", foreignKey: "ma_phim"});
  Ghe.belongsTo(RapPhim, { as: "ma_rap_phim_RapPhim", foreignKey: "ma_rap_phim"});
  RapPhim.hasMany(Ghe, { as: "Ghes", foreignKey: "ma_rap_phim"});
  LichChieu.belongsTo(RapPhim, { as: "ma_rap_phim_RapPhim", foreignKey: "ma_rap_phim"});
  RapPhim.hasMany(LichChieu, { as: "LichChieus", foreignKey: "ma_rap_phim"});

  return {
    Banner,
    CumRap,
    DatVe,
    Ghe,
    HeThongRap,
    LichChieu,
    NguoiDung,
    Phim,
    RapPhim,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return NguoiDung.init(sequelize, DataTypes);
}

class NguoiDung extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tai_khoang: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ho_ten: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    so_dt: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    mat_khau: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loai_nguoi_dung: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NguoiDung',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tai_khoang" },
        ]
      },
    ]
  });
  }
}

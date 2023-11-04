const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Ghe.init(sequelize, DataTypes);
}

class Ghe extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ma_ghe: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_ghe: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loai_ghe: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ma_rap_phim: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'RapPhim',
        key: 'ma_rap_phim'
      }
    }
  }, {
    sequelize,
    tableName: 'Ghe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ma_ghe" },
        ]
      },
      {
        name: "ma_rap_phim",
        using: "BTREE",
        fields: [
          { name: "ma_rap_phim" },
        ]
      },
    ]
  });
  }
}

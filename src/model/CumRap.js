const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CumRap.init(sequelize, DataTypes);
}

class CumRap extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ma_cup_rap: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_cum_rap: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dia_chi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ma_he_thong_rap: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HeThongRap',
        key: 'ma_he_thong_rap'
      }
    }
  }, {
    sequelize,
    tableName: 'CumRap',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ma_cup_rap" },
        ]
      },
      {
        name: "ma_he_thong_rap",
        using: "BTREE",
        fields: [
          { name: "ma_he_thong_rap" },
        ]
      },
    ]
  });
  }
}

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return RapPhim.init(sequelize, DataTypes);
}

class RapPhim extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ma_rap_phim: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_rap: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ma_cup_rap: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CumRap',
        key: 'ma_cup_rap'
      }
    }
  }, {
    sequelize,
    tableName: 'RapPhim',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ma_rap_phim" },
        ]
      },
      {
        name: "ma_cup_rap",
        using: "BTREE",
        fields: [
          { name: "ma_cup_rap" },
        ]
      },
    ]
  });
  }
}

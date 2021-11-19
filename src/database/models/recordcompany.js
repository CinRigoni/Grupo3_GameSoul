'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecordCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relación RecordCompany-Product
      this.hasMany(models.Product, {
        foreignKey: 'recordCompaniesId'
      })
    }
  };
  RecordCompany.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecordCompany',
  });
  return RecordCompany;
};
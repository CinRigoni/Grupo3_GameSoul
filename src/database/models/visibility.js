'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relación Visibility-Product
      this.hasMany(models.Product, {
        foreignKey: 'visibilitiesId'
      })
    }
  };
  Visibility.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visibility',
  });
  return Visibility;
};
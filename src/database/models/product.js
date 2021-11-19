'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relación Artist-Product
      this.belongsTo(models.Artist, {
        foreignKey: 'artistsId'
      })
      //Relación Category-Product
      this.belongsTo(models.Category, {
        foreignKey: 'categoriesId'
      })
      //Relación RecordCompany-Product
      this.belongsTo(models.RecordCompany, {
        foreignKey: 'recordCompaniesId'
      })
      //Relación Visibility-Product
      this.belongsTo(models.Visibility, {
        foreignKey: 'visibilitiesId'
      })
      //Relación Product-Image
      this.hasMany(models.Image, {
        foreignKey: 'productsId'
      })
      //Relación Product-OrderDetail
      this.hasMany(models.OrderDetail, {
        foreignKey: 'ordersId'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stockMin: DataTypes.INTEGER,
    stockMax: DataTypes.INTEGER,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER,
    visibilitiesId: DataTypes.INTEGER,
    artistsId: DataTypes.INTEGER,
    recordCompaniesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
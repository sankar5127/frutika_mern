const { Sequelize, DataTypes } = require("sequelize");
const sequlize = require("../config/db");

const Product = sequlize.define("Product",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        autoNull: false,
    },
    tagId: {
        type: DataTypes.INTEGER,
        autoNull: false,
    },
    price: {
        type: DataTypes.STRING,
        autoNull: false,
    },
    img: {
        type: DataTypes.STRING,
        autoNull: false,
    },
    img_path: {
        type: DataTypes.STRING,
        autoNull: false,
    },
},{
    tableName: "products",
    timestamps: true
});

module.exports = Product
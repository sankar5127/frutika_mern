const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const News = sequelize.define("news",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
    },
    author:{
        type: DataTypes.STRING,
    },
    content:{
        type: DataTypes.STRING,
    },
    img:{
        type: DataTypes.STRING,
    },
    img_path:{
        type: DataTypes.STRING,
    },
    postedOn:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    tableName: "news",
    timestamps: true
})



module.exports = News;
const { DataTypes } = require("sequelize");
const sequilize = require("../config/db");

const Tag = sequilize.define("Tag",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    tableName: "tags"
})

module.exports = Tag;
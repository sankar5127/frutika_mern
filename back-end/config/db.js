const { Sequelize } = require("sequelize");

const sequlize = new Sequelize("frutika","root","",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequlize;
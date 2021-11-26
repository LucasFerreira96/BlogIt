const Sequelize = require("sequelize");
const connection = new Sequelize("BlogItDB", "root", "atxl42mn7pq20", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
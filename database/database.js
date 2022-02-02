const Sequelize = require("sequelize");
const connection = new Sequelize("BlogItDB", "root", "@Atxl42mn7pq20", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

module.exports = connection;
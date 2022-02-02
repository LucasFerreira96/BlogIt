const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNUll: false
    }
});


module.exports = Category;
const Sequelize = require("sequelize");
const connection = require("../database/database");

const Users = connection.define("users", {
    email: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    password: {
        type: Sequelize.STRING,
        allowNUll: false
    }
});

// Users.sync({force: true})

module.exports = Users;
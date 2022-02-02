const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); //Uma categoria tem muitos artigos
Article.belongsTo(Category); //Um artigo pertence a uma categoria


module.exports = Article;
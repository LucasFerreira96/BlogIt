const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");

//Importing Controllers
const CategoriesController = require("./categories/CategoriesController");
const ArticlesController = require("./articles/ArticlesController");
const UsersController = require("./users/UsersController");

//Importing Models
const Article = require("./articles/Article");
const Category = require("./categories/Category");
const Users = require("./users/Users");

//View Engine
app.set("view engine", "ejs");

//Sessions

app.use(session({
    secret: "tosjkke",
    cookie: {
        maxAge: 30000000
    }
}));

//Static
app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Database connection OK");
    }).catch((error) => {
        console.log(error);
    });

//Using controllers
app.use("/", CategoriesController);
app.use("/", ArticlesController);
app.use("/", UsersController);

app.get("/", (req, res) => {

    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories =>{

        res.render("index", {articles: articles, categories: categories});
    });
    });

});

app.get("/:slug", (req,res) => {
    var slug = req.params.slug;
    
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories =>{

                res.render("article", {article: article, categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
});

app.get("/category/:slug", (req,res) =>{
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render("index", {articles: category.articles, categories: categories})
            })
        }else{
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/");
    })
})

app.listen(8080, () => {
    console.log("Server OK")
})
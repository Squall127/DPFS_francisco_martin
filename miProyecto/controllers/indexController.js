const db = require("../database/models");

db.sequelize.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));

module.exports = {

home: (req, res) => {
    console.log("Home controller is executing!");
    db.Product.findAll()
    .then(products => {
        console.log("Products Table:", JSON.stringify(products, null, 2));
        res.json(products);
    })
    .catch(error => {
        console.error("Database error:", error);
    });
},
    detail : (req,res) => {
        return res.render('products/detail')
    },
    login : (req,res) => {
        return res.render('users/login')
    },
    register : (req,res) => {
        return res.render('users/register')
    },
    create : (req,res) => {
        return res.render('products/create')
    },
    cart : (req,res) => {
        return res.render('products/cart')
    },
    edit : (req,res) => {
        return res.render('products/edit')
    }
}

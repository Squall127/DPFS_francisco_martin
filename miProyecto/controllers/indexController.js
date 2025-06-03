const db = require("../src/database/models");


db.sequelize.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));
    

module.exports = {

 home: (req, res) => {
    console.log("Home controller is executing!");

    db.Product.findAll({
    attributes: ['id', 'p_name', 'p_image', 'price', 'c_id'],
    raw: true // ✅ Makes sure Sequelize returns plain objects instead of wrapped ones
})
    .then(products => {
        console.log("✅ Raw Products:", products); // Debugging Step

        // Convert BLOB images to Base64 format
        const updatedProducts = products.map(product => ({
            ...product,
            p_image: `data:image/png;base64,${Buffer.from(product.p_image).toString("base64")}`
        }));

        console.log("✅ Final Processed Products:", updatedProducts); // Another Debug Step

        // ✅ Send the response ONLY ONCE
        res.render("home", { products: updatedProducts });
    })
    .catch(error => {
        console.error("❌ Database error:", error);
        res.status(500).send("Error fetching products.");
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

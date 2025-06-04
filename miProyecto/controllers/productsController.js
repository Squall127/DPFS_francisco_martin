const path = require("path");
const multer = require("multer");

const db = require("../src/database/models")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = {
addForm: async (req, res) => {
    try {
    const categories = await db.Category.findAll();
    res.render("products/addForm", { categories });
    } catch (error) {
        res.status(500).send("Error loading categories.");
    }
},
store: async (req, res) => {
    
    try {
        const { p_name, price, description, p_image, c_id } = req.body;

        let newProd = {
            p_name,
            price,
            description,
            p_image: req.file?.filename || "default.png",
            c_id 
        };

        console.log("📌 New product data:", newProd); 
        const createdProduct = await db.Product.create(newProd);

        console.log("✅ Product saved successfully!", createdProduct);
        res.redirect("/");
    } catch (error) {
    
        res.status(500).send("Error adding product.");
    }
},
editForm: async (req, res) => {
    try { 
        const categories = await db.Category.findAll();
        const prodFound = await db.Product.findByPk(Number(req.params.id));

        res.render("products/editForm", { prodFound, categories });
    } catch (error) {
        
        res.status(500).send("Error loading edit form.");
    }
},
update: async (req, res) => {
    
    try {
        const { p_name, price, description, p_image, c_id } = req.body;

        let prodFound = await db.Product.findByPk(req.params.id)
        
        let prodUpdated ={
            p_name : p_name,
           price : price,
           description : description,
           p_image : req.file?.filename || "default.png",
           c_id : c_id 
        }
        ;

        await db.Product.update(prodUpdated, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/");
    } catch (error) {
    
        res.status(500).send("Error adding product.");
    }
},
destroy: async (req,res) => {
    const productDelete = await db.Product.destroy({
        where: {
                id: req.params.id
            }
    });

    console.log("Product deleted: ", productDelete)

    res.redirect("/");

}

}


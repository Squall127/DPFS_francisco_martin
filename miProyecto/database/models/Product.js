module.exports = (sequelize, DataTypes) => {
    const alias = "Product"
    const cols = {
        p_name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(10,2)
        },
        description: {
            type: DataTypes.STRING
        },
        p_image: {
            type: DataTypes.BLOB
        },
    }
    const config = {
        tableName: "products"
    }
    
    const Product = sequelize.define(alias,cols,config)

    return Product
}
module.exports = (sequelize, DataTypes) => {
    const alias = "Product"
    const cols = {
        id: {
            type: DataTypes.INTEGER(50),
            primaryKey: true
        },
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
        c_id: {
            type: DataTypes.INTEGER(50)
        }
    }
    const config = {
        tableName: "products",
        timestamps: false
    }
    
    const Product = sequelize.define(alias,cols,config)

    return Product
}
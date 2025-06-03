module.exports = (sequelize, DataTypes) => {
    const alias = "Category"
    const cols = {
        id: {
            type: DataTypes.INTEGER(50),
            primaryKey: true
        },
        c_name: {
            type: DataTypes.STRING
        },
        c_image: {
            type: DataTypes.BLOB
        },
    }
    const config = {
        tableName: "categories",
        timestamps: false
    }
    
    const Category = sequelize.define(alias,cols,config)

    return Category
}
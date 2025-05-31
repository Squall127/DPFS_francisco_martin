module.exports = {
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

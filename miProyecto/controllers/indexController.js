module.exports = {
    product : (req,res) => {
        return res.render('product')
    },
    login : (req,res) => {
        return res.render('login')
    },
    register : (req,res) => {
        return res.render('register')
    }
}
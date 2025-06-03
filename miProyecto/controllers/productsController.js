module.exports = {
    detail : (req,res) => {
        return res.render('products/detail')
    },
    create : (req,res) => {
        return res.render('products/create')
    },
    edit : (req,res) => {
        return res.render('products/edit')
    }
}
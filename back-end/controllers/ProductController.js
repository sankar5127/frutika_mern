
const Product = require("../models/Product");
exports.store = async (req,res,next) => {
    let {title, tagId, price} = req.body;
    let img = req.file.filename;
    let img_path = req.file.path;
    let results = await Product.create({
        title,tagId,price,img,img_path
    });
    
    if(results){
         return res.send({
                status: 200,
                data: results.toJSON(),
                message: 'success'
            });
    }
    return res.send({
            status: 201,
            data: [],
            message: "failed"
        });
}

exports.products = async (req,res,next) => {
    let products = await Product.findAll();
    return res.send({
            status: 200,
            products: products
        });
}

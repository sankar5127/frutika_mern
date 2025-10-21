const Cart = require("../models/Cart")
exports.cartList = async (req,res,next) => {

    let cartItems = await Cart.findAll({
        where: {
            userId: req.user.userid
        }
    })
    return res.json({
        cartItems
    });
} 

exports.cartStore = async (req,res,next) => {
    /*
    let cartItem = await Cart.findAll({
        where: {
            productId: req.body.id,
            userId: req.user.userid,
        }
    });

    if(cartItem){
        cartItem.update({qty: cartItem.qty+1})
    }else{
        cartItem = await Cart.create({
            productId: req.body.id,
            userId: req.user.userid,
            qty: req.body.qty
        })
    }
    */

    let cartItem = await Cart.create({
        productId: req.body.id,
        userId: req.user.userid,
        qty: req.body.qty
    })

    if(cartItem){
        return res.json({
            status: 200,
            message: 'cart added'
        });
    }
     return res.json({
            status: 201,
            message: 'cart failed'
        });
} 

exports.removeCartItem = async (req,res,next) => {
    let {productId} = req.params;
    console.log("remove", productId)
    let cartStatus = Cart.destroy({
        where:{
            productId,
            userId: req.user.userid
        }
    });

    if(cartStatus){
        return res.json({
            status: 200,
            message: "Item has been deleted"
        })
    }

     return res.json({
            status: 201,
            message: 'cart failed'
        });
} 
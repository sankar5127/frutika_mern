const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;


exports.users = async function(req,res,next){
    let users = await User.findAll();
    return res.json({
        'status': 200,
        'users': users
    });
}

exports.store = async function(req,res,next) {
    let userData = req.body; // plain  password
    console.log("plain text",userData)
    const hashPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashPassword;
    console.log("encrypted",userData)

    let user = await User.create(userData);
    if(user){
        return res.json({
            'status': 200,
            'users': user,
            'message': "User created successfully",
        });
    }else{
        return res.json({
            'status': 201,
            'users': user,
            'message': "oops...! something went wrong",
        });
    }
}

exports.login = async function(req,res,next){
    let {token,user} = req
    return res.json({
        token,user
    });
}


const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { options } = require("../routes/api");
dotenv.config();

const Authneticate = async (req,res,next) => {
    let {username, password} =  req.body;
    let user = await User.findOne({
        where: { 
            'username': username
        }
    })
    if(user){
        let isPasswordMatch = await bcrypt.compare(password, user.password);
        if(isPasswordMatch){
            let payload = {
                userid: user.id,
                username: user.username,
            }
            let token = await jwt.sign(payload, process.env.JWT_SCRIET,{ expiresIn: '1h' });
            console.log("token", token)
            req.user = {
                id: user.id,
                username: user.username
            }
            req.token = token;
            next();
        }else{
            return res.json({
                status: 201,
                message: "invalid credentials"
            })
        }
    }else{
        return res.json({
            "status": 401,
            "message": "user is unauthenticated"
        });
    }

}

module.exports = Authneticate;
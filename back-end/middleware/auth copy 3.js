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
        
        let isPasswordMatch = bcrypt.compare(Error, password, user.password);
        
    }else{
        return res.json({
            "status": 401,
            "message": "user is unauthenticated"
        });
    }

}

module.exports = Authneticate;
const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");
const bcrypt = require("bcrypt");
dotenv.config();

const AuthUser = async (req,res,next) => {
    try{
        let token = req.headers.authorization.split(" ")[1];
        let decode = await jwt.verify(token,process.env.JWT_SCRIET)
        req.user = decode;
        next(); 
    }catch(error){
        return res.json({
            status: 201,
            error
        })
    }
}

module.exports = AuthUser;
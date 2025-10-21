const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { options } = require("../routes/api");
dotenv.config();

const Authneticate = async (req,res,next) => {
    // method 2
    let {username, password} =  req.body;
    let user = User.findOne({
        where: { 
            'username123': username
        }
    }).then(data=>{
        return res.json({
            status: 200,
            data
        })
    }).catch(error =>{
        return res.json({
            status: 201,
            message: "Oops...! Something went wrong."
        })
    })
}

module.exports = Authneticate;
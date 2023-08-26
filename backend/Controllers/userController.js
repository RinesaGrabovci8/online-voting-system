const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
require("../models/user")
const User = mongoose.model("UserInfo");

const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

exports.userData = async (req, res) => {
    const {token} = req.body;
    try{
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if(err){
          return "token expired"
        }
        return res;
      });
      console.log(user);
      if(user == "token expired"){
        return res.send({status:"error", data: "token expired"});
      }
      const userpersonalnumber = user.personalnumber;
      User.findOne({personalnumber: userpersonalnumber})
        .then((data) => {
          res.send({status: "ok", data: data});
        })
        .catch((error)=>{
          res.send({status:"error", data: error});
        });
    }catch(error){}
};

exports.updateUserPass = async (req, res) =>{
  const {id, password} = req.body;

  try{
    await User.updateOne({_id:id}, {
      $set:{
        password:password
      }
    })
    return res.json({status:"ok", data:"updated"});
  }catch(error){
    return res.json({status: "error", data: error})
  }
};


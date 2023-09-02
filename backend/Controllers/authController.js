const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { error } = require('console');
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

require('../models/user');
const User = mongoose.model("UserInfo");


exports.register = async(req, res) =>{
    const{personalnumber, password, confirmpassword, role} = req.body;
  
    if (!personalnumber || !password || !role) {
      return res.status(400).send({ error: "All fields are required." });
    }
  
    if (password !== confirmpassword) {
      return res.status(400).send({ error: "Passwords do not match." });
    }
  
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
      const oldUser = await User.findOne({personalnumber});
  
      if(oldUser){
        return res.send({error:"User exists."})
      }
      await User.create({
        personalnumber,
        password: encryptedPassword,
        role
      });
      res.send({status:"ok"});
    }catch(error){
      res.send({status:"error"})
    }
};
  
exports.login =  async (req, res) => {
    const {personalnumber, password} = req.body;
  
    const user = await User.findOne({personalnumber});
    if(!user){
      return res.json({error:"User not found"});
    }
    if(await bcrypt.compare(password, user.password)){
      const token = jwt.sign({ personalnumber: user.personalnumber }, JWT_SECRET, {
        expiresIn: '30m', 
      });
      if(res.status(201)){
        return res.json({status:"ok", data:token});
      }else{
        return res.json({error:"error"});
      }
    }
    res.json({status:"error", error:"Invalid password"});
};
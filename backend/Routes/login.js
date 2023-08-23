const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
require('../models/user');
const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
    const {personalnumber, password} = req.body;

    const user = await User.findOne({personalnumber});
    if(!user){
      return res.json({error:"User not found"});
    }
    if(await bcrypt.compare(password, user.password)){
      const token = jwt.sign({personalnumber: user.personalnumber}, JWT_SECRET, {
        expiresIn: "30m",
      });
      if(res.status(201)){
        return res.json({status:"ok", data:token});
      }else{
        return res.json({error:"error"});
      }
    }
    res.json({status:"error", error:"Invalid password"});
});

module.exports = router;

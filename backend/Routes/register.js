const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


require('../models/user');
const User = mongoose.model("UserInfo");


router.post("/", async (req, res) => {
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
});

module.exports = router;

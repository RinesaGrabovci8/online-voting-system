const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const bcrypt = require('bcrypt');
require("../models/user")
const User = mongoose.model("UserInfo");

const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

exports.userData = async (req, res) => {
  const { token } = req.body;
  
  try {
    const user = jwt.verify(token, JWT_SECRET);

    if (Date.now() >= user.exp * 1000) {
      return res.status(401).json({ status: "error", data: "token expired" });
    }

    const userpersonalnumber = user.personalnumber;

    User.findOne({ personalnumber: userpersonalnumber })
      .then((data) => {
        res.status(200).json({ status: "ok", data: data });
      })
      .catch((error) => {
        res.status(500).json({ status: "error", data: error });
      });
  } catch (error) {
    res.status(401).json({ status: "error", data: "invalid token" });
  }
};

exports.updatePasswordById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: 'Password field is required.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password : hashedPassword},
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try{ 
    
    const allUsers = await User.find({});
    res.send({status:"ok", data:allUsers});

  }catch(error){
    console.log(error);
  }
}

exports.deleteUserbyid = async (req, res) => {
  try {
    const userId = req.params.id;

    await User.findByIdAndRemove(userId);

    res.status(200).json({ status: 'ok', message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};


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

    // Check if the token is expired
    if (Date.now() >= user.exp * 1000) {
      // Token is expired; return an error
      return res.status(401).json({ status: "error", data: "token expired" });
    }

    const userpersonalnumber = user.personalnumber;

    // Your logic to retrieve user data (e.g., User.findOne)
    User.findOne({ personalnumber: userpersonalnumber })
      .then((data) => {
        res.status(200).json({ status: "ok", data: data });
      })
      .catch((error) => {
        res.status(500).json({ status: "error", data: error });
      });
  } catch (error) {
    // Handle token verification errors
    res.status(401).json({ status: "error", data: "invalid token" });
  }
};

exports.updateUserPass = async (req, res) => {
  const { newPassword, personalnumber } = req.body;

  try {
    // Find the user by personal number in your database
    const user = await User.findOne({ personalnumber });

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    // Update the user's password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    // Save the updated user object
    await user.save();

    res.status(200).json({ status: 'ok', message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
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


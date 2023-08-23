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
const router = express.Router();
const authController = require('../Controllers/authController');

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

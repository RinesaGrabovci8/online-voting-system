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
const userController = require('../Controllers/userController');

router.post("/userData", userController.userData);
router.post("/updateUserPass", userController.updateUserPass)
module.exports = router;
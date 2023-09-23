const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const router = express.Router();

const authController = require('../Controllers/authController');

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const centralvoters = require("../Controllers/centralVoteController");
const localvoters = require("../Controllers/localVoteController");

router.post('/centralVotes' , centralvoters.voter);

module.exports = router;




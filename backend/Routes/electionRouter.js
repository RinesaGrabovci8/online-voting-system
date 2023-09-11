const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const electionController = require("../Controllers/electionsController.js");

router.post("/election",electionController.createElection);
router.get("/election", electionController.getElections);
router.get("/election/:id", electionController.getElectionsById);
router.get('/centralelection', electionController.getCentralElection);
router.get('/localelection', electionController.getLocalElection);
router.get('/prishtinelections/:city', electionController.getLocalElectionPr);
router.put("/election/:id", electionController.updateElectionById);
router.delete("/election/:id", electionController.deleteElectionById);

module.exports = router;
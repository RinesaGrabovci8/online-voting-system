const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const candidateController = require("../Controllers/candidateController");

router.post('/candidate', candidateController.createCandidate);
router.get('/candidate', candidateController.getCandidates);
router.get('/candidate/:id', candidateController.getCandidateById);
router.put('/candidate/:id', candidateController.updateCandidateById);
router.delete('/candidate/:id', candidateController.deleteCandidateById);

module.exports = router;
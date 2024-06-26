const express = require("express");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const candidateController = require("../Controllers/candidateController");

router.post('/candidate', candidateController.createCandidate);
router.get('/candidate', candidateController.getCandidates);
router.put('/candidate/:id', candidateController.updateCandidateById);
router.get('/getcandidate/:id', candidateController.getCandidateById);
router.delete('/deleteCandidate/:id', candidateController.deleteCandidateById);
router.get('/getAllCandidates', candidateController.getAllCandidates);
router.get('/getAllCandidatesbyElection', candidateController.getAllCandidatesbyElection);
router.get('/getAllCandidatesbyCitypr', candidateController.getAllCandidatesbyCitypr);
router.get('/getAllCandidatesbyCityskdr', candidateController.getAllCandidatesbyCityskdr);
router.get('/getAllCandidatesbyCityprz', candidateController.getAllCandidatesbyCityprz);
router.get('/getAllCandidatesbyCitypej', candidateController.getAllCandidatesbyCitypej);
router.get('/getAllCandidatesbyCitypd', candidateController.getAllCandidatesbyCitypd);
router.get('/getAllCandidatesbyCitymtrv', candidateController.getAllCandidatesbyCitymtrv);
router.get('/getAllCandidatesbyCitygjl', candidateController.getAllCandidatesbyCitygjl);
router.get('/getAllCandidatesbyCitygjk', candidateController.getAllCandidatesbyCitygjk);
router.get('/getAllCandidatesbyCityfr', candidateController.getAllCandidatesbyCityfr);

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const router = express.Router();

const centralvoters = require("../Controllers/centralVoteController");
const localvoters = require("../Controllers/localVoteController");

router.post('/centralVotes/:id' , centralvoters.voter);
router.get('/centralVotes', centralvoters.getQendroreCandidatesVotes);
router.post('/localVotes/:id', localvoters.localvoter);
router.get('/localVotesPr', localvoters.getLokaleCandidatesPr);
router.get('/localVotesPrz', localvoters.getLokaleCandidatesPrz);
router.get('/localVotesSkdr', localvoters.getLokaleCandidatesSkdr);
router.get('/localVotesPej', localvoters.getLokaleCandidatesPej);
router.get('/localVotesPd', localvoters.getLokaleCandidatesPd);
router.get('/localVotesMtrv', localvoters.getLokaleCandidatesMtrv);
router.get('/localVotesGjl', localvoters.getLokaleCandidatesGjl);
router.get('/localVotesGjk', localvoters.getLokaleCandidatesGjk);
router.get('/localVotesFr', localvoters.getLokaleCandidatesFr);

module.exports = router;




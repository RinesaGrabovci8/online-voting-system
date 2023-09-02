const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const partyRouter = require("../Controllers/partyController");

router.post('/party',partyRouter.createParty);
router.get('/party', partyRouter.getParties);
router.get("/party/:id", partyRouter.getPartyById);
router.put("/party/:id", partyRouter.updatePartyById);
router.delete("/deleteParty/:id", partyRouter.deletePartyById);
router.get('/getAllParties', partyRouter.getAllParties);

module.exports = router;




const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000; // Use the logical OR operator

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://rinesa:rinesa@cluster0.kq0f0ry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to Database");
}).catch(e => console.log(e));


require("../backend/models/party.js");
const Party = mongoose.model("Parties");
app.post("/parties", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Party name is required." });
    }

    const newParty = await Party.create({ name }); // Use Party.create
    res.status(201).json(newParty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/parties", async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/parties/:id", async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);
    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(200).json(party);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/parties/:id", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Party name is required." });
    }

    const updatedParty = await Party.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!updatedParty) {
      return res.status(404).json({ message: "Party not found" });
    }

    res.status(200).json(updatedParty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/parties/:id", async (req, res) => {
  try {
    const deletedParty = await Party.findByIdAndDelete(req.params.id);
    if (!deletedParty) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

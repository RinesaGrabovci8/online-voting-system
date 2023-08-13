const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require('mongoose');
const User = require('../models/user.js');
const Election = require('../models/elections.js');
const Party = require('../models/parties.js');
const Candidate = require('../models/candidate.js');
const Result = require('../models/results.js');

const uri = "mongodb+srv://rinesa:9ohqksxIkjYNzwGl@cluster0.gedxlpp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas");
  
      await insertData();
    } catch (error) {
      console.error("Error connecting to MongoDB Atlas:", error);
    } finally {
      await client.close();
      console.log("Connection closed.");
    }
}
async function insertData() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const newUser = new User({ 
        username: 'user123',
        password: 'pass123',
       });
      await newUser.save();
  
      const newElection = new Election({
        type: 'Local Election',
       });
      await newElection.save();
  
      const newParty = new Party({ 
        name: 'PDK',
       });
      await newParty.save();
  
      const newCandidate = new Candidate({ 
        name: 'Hashim',
        surname: 'Thaci',
        party_id: newParty._id,
        election_id: newElection._id,
       });
      await newCandidate.save();
  
      const newResult = new Result({ 
        election_id: newElection._id,
        party_id: newParty._id,
        votes: 100000,
       });
      await newResult.save();
  
      console.log("Data inserted using models.");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  }

connectToDatabase();










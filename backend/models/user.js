const mongoose = require('mongoose');

const user = new mongoose.Schema({
  personalnumber: {type: String, unique: true},
  password:String,
  role:String,
  hasVotedLocal: { type: Boolean, default: false },
  hasVotedCentral: { type: Boolean, default: false }
},
{
  collection:"UserInfo"
});

mongoose.model('UserInfo', user);

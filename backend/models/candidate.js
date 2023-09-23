const mongoose = require('mongoose');

const candidate = new mongoose.Schema({ 
  name: { type: String, required: true },
  surname: { type: String, required: true },
  party: { type: String, required:true },
  election: { type: String, required:true},
  city: { type: String },
  votes:{type: Number, default: 0}
},
{
  collection:"CandidateInfo"
}
);

mongoose.model('CandidateInfo', candidate);



const mongoose = require('mongoose');

const director = new mongoose.Schema({
  name: { type: String, required: true },
  birthyear:{type:String, required: false}
},
{
  collection:'director'
});

mongoose.model('director', director);
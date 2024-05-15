const mongoose = require('mongoose');

const Player = new mongoose.Schema({
  name: { type: String, required: true },
  birthyear:{type:String, required: false},
  number:{type:Number, required:true},
  team: { type:String, required: true },
},
{
  collection:'Player'
});

mongoose.model('Player', Player);
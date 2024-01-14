const mongoose = require('mongoose');

const planet = new mongoose.Schema({
  planetid:{type:Number, default:212255960},
  name: { type: String, required: true },
  type:{type:String, required: true},
  isDeleted:{type:Boolean, default:false}
},
{
  collection:'Planeti'
});

mongoose.model('Planeti', planet);
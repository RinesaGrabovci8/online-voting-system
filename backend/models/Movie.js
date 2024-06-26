const mongoose = require('mongoose');

const movie= new mongoose.Schema({
  name: { type: String, required: true },
  year:{type:String, required: false},
  title:{type:String, required:true},
  director:{type:String, required:true}
},
{
  collection: 'movie'
});

mongoose.model('movie', movie);

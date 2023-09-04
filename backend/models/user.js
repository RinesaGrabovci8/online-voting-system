const mongoose = require('mongoose');

const user = new mongoose.Schema({
  personalnumber: {type: String, unique: true},
  password:String,
  role:String,
},
{
  collection:"UserInfo"
});

mongoose.model('UserInfo', user);

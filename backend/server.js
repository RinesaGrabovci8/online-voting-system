const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { error } = require('console');
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl = "mongodb+srv://rinesa:rinesa@cluster0.kq0f0ry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{console.log("Connected to Database");})
.catch(e => console.log(e));

require("../backend/models/user");
const User = mongoose.model("UserInfo");

app.post("/register", async(req, res) =>{
  const{personalnumber, password, confirmpassword} = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try{
    const oldUser = await User.findOne({personalnumber});

    if(oldUser){
      return res.send({error:"User exists."})
    }
    await User.create({
      personalnumber,
      password: encryptedPassword
    });
    res.send({status:"ok"});
  }catch(error){
    res.send({status:"error"})
  }
});

app.post("/login", async (req, res) => {
  const {personalnumber, password} = req.body;

  const user = await User.findOne({personalnumber});
  if(!user){
    return res.json({error:"User not found"});
  }
  if(await bcrypt.compare(password, user.password)){
    const token = jwt.sign({personalnumber: user.personalnumber}, JWT_SECRET, {
      expiresIn: 30,
    });
    if(res.status(201)){
      return res.json({status:"ok", data:token});
    }else{
      return res.json({error:"error"});
    }
  }
  res.json({status:"error", error:"Invalid password"});
});

app.post("/userData", async (req, res) =>{
  const {token} = req.body;
  try{
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if(err){
        return "token expired"
      }
      return res;
    });
    console.log(user);
    if(user == "token expired"){
      return res.send({status:"error", data: "token expired"});
    }
    const userpersonalnumber = user.personalnumber;
    User.findOne({personalnumber: userpersonalnumber})
      .then((data) => {
        res.send({status: "ok", data: data});
      })
      .catch((error)=>{
        res.send({status:"error", data: error});
      });
  }catch(error){}
});

app.listen(5000, () => {
  console.log("server started");
})


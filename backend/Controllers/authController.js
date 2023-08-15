const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function register(req, res) {
  const { personalid, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    personalid,
    hashedPassword,
    role,
  });

  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
}

async function login(req, res) {
  const { personalid, password } = req.body;

  const user = await User.findOne({ personalid });

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, 'GfddFFf22', {
    expiresIn: '1h',
  });

  res.json({ token });
}

module.exports = { register, login };

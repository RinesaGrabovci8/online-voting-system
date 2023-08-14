const Candidate = require('../models/candidate.js'); // Import the Candidate model

// Get all candidates
exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await candidate.find();
    res.json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({ error: 'Failed to fetch candidates' });
  }
};

// Add a new candidate
exports.addCandidate = async (req, res) => {
  const { name, surname, imageSrc, description } = req.body;

  try {
    const candidate = await candidate.create({ name, surname, imageSrc, description });
    res.status(201).json({ message: 'Candidate added successfully', candidate });
  } catch (error) {
    console.error('Error adding candidate:', error);
    res.status(500).json({ error: 'Failed to add candidate' });
  }
};

// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [candidateId, setCandidateId] = useState('');
  const [updatedCandidateData, setUpdatedCandidateData] = useState({
    name: '',
    surname: '',
    party: '',
    election: '',
    city: '',
  });

  const handleCandidateIdChange = (e) => {
    setCandidateId(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCandidateData({ ...updatedCandidateData, [name]: value });
  };

  const handleUpdateCandidate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/test/api/candidate/${candidateId}`, updatedCandidateData);
      console.log('Updated candidate:', response.data);
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  return (
    <div className="App">
      <h1>Candidate Update</h1>
      <div>
        <input type="text" placeholder="Candidate ID" value={candidateId} onChange={handleCandidateIdChange} />
        <input type="text" name="name" placeholder="Name" value={updatedCandidateData.name} onChange={handleInputChange} />
        <input type="text" name="surname" placeholder="Surname" value={updatedCandidateData.surname} onChange={handleInputChange} />
        <input type="text" name="party" placeholder="Party" value={updatedCandidateData.party} onChange={handleInputChange} />
        <input type="text" name="election" placeholder="Election" value={updatedCandidateData.election} onChange={handleInputChange} />
        <input type="text" name="city" placeholder="City" value={updatedCandidateData.city} onChange={handleInputChange} />
        <button onClick={handleUpdateCandidate}>Update Candidate</button>
      </div>
    </div>
  );
}

export default Test;

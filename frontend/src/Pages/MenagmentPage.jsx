import React, { useEffect, useState } from 'react';
import '../CSS/adminhome.css';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

function MenagmentPage() {
  const [showPerdoruesitTable, setShowPerdoruesitTable] = useState(false);
  const [showKandidatetTable, setShowKandidatetTable] = useState(false);
  const [showPartiteTable, setShowPartiteTable] = useState(false);
  const [filter, setFilter] = useState('');
  
  const [userdata, setuserData] = useState([]);
  const [kandidatdata, setkandidatData] = useState([]);
  const [partitdata, setpartitData] = useState([]);

  const toggleTable = (table) => {
    setShowPerdoruesitTable(false);
    setShowKandidatetTable(false);
    setShowPartiteTable(false);

    switch (table) {
      case 'Perdoruesit':
        setShowPerdoruesitTable(true);
        break;
      case 'Kandidatet':
        setShowKandidatetTable(true);
        break;
      case 'Partite':
        setShowPartiteTable(true);
        break;
      default:
        break;
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/getAllUsers");
      const userdata = await response.json();
      setuserData(userdata.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidates");
      const kandidatdata = await response.json();
      setkandidatData(kandidatdata.data);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  const fetchPartitData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllParties");
      const partitdata = await response.json();
      setpartitData(partitdata.data);
    } catch (error) {
      console.error('Error fetching parties data:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/auth/deleteUser/${userId}`);

      // After successful deletion, you can update the state or perform other actions as needed
      console.log(`User with ID ${userId} deleted successfully.`);
      
      // You might want to refetch the user data to update the table after deletion
      fetchUserData();
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };

  const deleteCandidate = async (candidateId) => {
    try {
      await axios.delete(`http://localhost:5000/crud/deleteCandidate/${candidateId}`);

      // After successful deletion, you can update the state or perform other actions as needed
      console.log(`Candidate with ID ${candidateId} deleted successfully.`);
      
      // You might want to refetch the user data to update the table after deletion
      fetchUserData();
    } catch (error) {
      console.error(`Error deleting candidate with ID ${candidateId}:`, error);
    }
  };

  const deleteParty = async (partyId) => {
    try {
      await axios.delete(`http://localhost:5000/crud/deleteParty/${partyId}`);

      // After successful deletion, you can update the state or perform other actions as needed
      console.log(`Party with ID ${partyId} deleted successfully.`);
      
      // You might want to refetch the user data to update the table after deletion
      fetchUserData();
    } catch (error) {
      console.error(`Error deleting party with ID ${partyId}:`, error);
    }
  };

  useEffect(() =>{
    fetchUserData();
    fetchKandidatData();
    fetchPartitData();
    deleteUser();
    deleteCandidate();
    deleteParty();
  }, []);

 
  
  const filteredCandidates = kandidatdata.filter((candidate) => {
    return candidate.name.toLowerCase().includes(filter.toLowerCase()) || candidate.surname.toLowerCase().includes(filter.toLowerCase()) || candidate.party.toLowerCase().includes(filter.toLowerCase()) || candidate.election.toLowerCase().includes(filter.toLowerCase());
  });

  const filteredUsers = userdata.filter((user) => {
    return user.personalnumber.toLowerCase().includes(filter.toLowerCase());
  });
  
  const filteredParties = partitdata.filter((party) => {
    return party.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className='admin-container'>
        <div className="button-container">
        <button 
            className={`button ${showPerdoruesitTable ? 'active' : ''}`}
            onClick={() => toggleTable('Perdoruesit')}
        >
            Perdoruesit
        </button>
        <button
            className={`button ${showKandidatetTable ? 'active' : ''}`}
            onClick={() => toggleTable('Kandidatet')}
        >
            Kandidatet
        </button>
        <button
            className={`button ${showPartiteTable ? 'active' : ''}`}
            onClick={() => toggleTable('Partite')}
        >
            Partite
        </button>
        </div>
        <div className='table-container'>
        {showPerdoruesitTable && (
            <div className='auth-wrapper'>
            <div className='auth-inner'>
                <div>
                    <input
                    type="text"
                    placeholder="Filtero Perdoruesit"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <table>
                <thead>
                    <tr>
                    <th>Numri Personal</th>
                    </tr>
                    {filteredUsers.map((i) => {
                    return (
                      <tr key={userdata._id}>
                        <td className='data'>{i.personalnumber}</td>
                        <td className='delete'> 
                        <Link to={`/delete/${i.id}`}>
                          <DeleteIcon style={{ color: 'red',  fontSize: '16px', margin:8 }} onClick={() => deleteUser(i._id)} />
                        </Link>
                        </td>
                      </tr>
                    );
                  })}
                </thead>
                </table>
            </div>
            </div>
        )}
        {showKandidatetTable && (
            <div className='auth-wrapper'>
            <div className='auth-inner'>
                <div>
                    <input
                    type="text"
                    placeholder="Filtero Kandidatet"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <table>
                <thead>
                    <tr>
                    <th>Emri</th>
                    <th>Mbiemri</th>
                    <th>Partia</th>
                    <th>Zgjedhjet</th>
                    <th>Qyteti</th>
                    </tr>
                    {filteredCandidates.map((i) => {
                    return (
                      <tr key={kandidatdata._id}>
                        <td>{i.name}</td>
                        <td>{i.surname}</td>
                        <td>{i.party}</td>
                        <td>{i.election}</td>
                        <td>{i.city}</td>
                        <td className='delete'>
                            <Link to={`/delete/${i.id}`}>
                                <DeleteIcon style={{ color: 'red',  fontSize: '16px', margin:8 }} onClick={() => deleteCandidate(i._id)}/>
                            </Link>
                
                            <Link to={`/upadatecandidate/${i._id}`}>
                                <EditIcon style={{ fontSize: '16px', margin:8}}/>
                            </Link>
                          </td>
                      </tr>
                    );
                  })}
                </thead>
                </table>
            </div>
            <div className='add-button'>
                <button><Link to="/shtokandidat">Shto Kandidat</Link></button>
            </div>
            </div>
        )}

        {showPartiteTable && (
            <div className='auth-wrapper'>
            <div className='auth-inner'>
                <div>
                    <input
                    type="text"
                    placeholder="Filtero Partite"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <table>
                <thead>
                    <tr>
                    <th>Emri</th>
                    </tr>
                    {filteredParties.map((i) => {
                    return (
                      <tr key={partitdata._id}>
                        <td>{i.name}</td>
                        <td>
                            <Link to={`/delete/${i.id}`}>
                                <DeleteIcon style={{ color: 'red',  fontSize: '16px', margin:8 }} onClick = {() => deleteParty(i._id)}/>
                            </Link>
                
                            <Link to={`/updateparty/${i._id}`}>
                                <EditIcon style={{ fontSize: '16px', margin:8}}/>
                            </Link> 
                        </td>
                      </tr>
                    );
                  })}
                </thead>
                </table>
                <div className='add-button'>
                  <button><Link to="/shtoparti">Shto Parti</Link></button>
               </div>
            </div>
            </div>
        )}
        </div>
    </div>
  );
}

export default MenagmentPage;

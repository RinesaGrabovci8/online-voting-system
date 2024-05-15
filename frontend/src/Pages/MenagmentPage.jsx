import React, { useEffect, useState } from 'react';
import '../CSS/adminhome.css';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

function MenagmentPage() {
  const [showPerdoruesitTable, setShowPerdoruesitTable] = useState(false);
  const [showKandidatetTable, setShowKandidatetTable] = useState(false);
  const [showPartiteTable, setShowPartiteTable] = useState(false);
  const [showPlayertable, setshowPlayertable] = useState(false);
  const [showTeamtable, setshowTeamtable] = useState(false)

  const [userFilter, setUserFilter] = useState('');
  const [candidateFilter, setCandidateFilter] = useState('');
  const [partyFilter, setPartyFilter] = useState('');
  // const [ndertesaFilter, setndertesaFilter] = useState('');
  // const [liftiFilter, setliftiFilter] = useState('');

  const [userdata, setuserData] = useState([]);
  const [kandidatdata, setkandidatData] = useState([]);
  const [partitdata, setpartitData] = useState([]);
  const [playerdata, setplayerdata] = useState([]);
  const [teamdata, setteamdata] = useState([]);

  const toggleTable = (table) => {
    setShowPerdoruesitTable(false);
    setShowKandidatetTable(false);
    setShowPartiteTable(false);
    setshowPlayertable(false);
    setshowTeamtable(false);

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
      case 'Player':
        setshowPlayertable(true);
        break;
      case 'Team':
        setshowTeamtable(true);
        break;
      default:
        break;
    }
  };

  const fetchPlayerData = async () => {
    try {
      const response = await fetch("http://localhost:5001/crudtest/getAllPlayer");
      const playerdata = await response.json();
      setplayerdata(playerdata.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchTeamData = async () => {
    try {
      const response = await fetch("http://localhost:5001/crudtest/getAllTeams");
      const teamdata = await response.json();
      setteamdata(teamdata.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5001/auth/getAllUsers");
      const userdata = await response.json();
      setuserData(userdata.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5001/crud/getAllCandidates");
      const kandidatdata = await response.json();
      setkandidatData(kandidatdata.data);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  const fetchPartitData = async () => {
    try {
      const response = await fetch("http://localhost:5001/crud/getAllParties");
      const partitdata = await response.json();
      setpartitData(partitdata.data);
    } catch (error) {
      console.error('Error fetching parties data:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5001/auth/deleteUser/${userId}`);
      console.log(`User with ID ${userId} deleted successfully.`);
      fetchUserData();
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };

  const deleteCandidate = async (candidateId) => {
    try {
      await axios.delete(`http://localhost:5001/crud/deleteCandidate/${candidateId}`);
      console.log(`Candidate with ID ${candidateId} deleted successfully.`);
      fetchKandidatData();
    } catch (error) {
      console.error(`Error deleting candidate with ID ${candidateId}:`, error);
    }
  };

  const deleteParty = async (partyId) => {
    try {
      await axios.delete(`http://localhost:5001/crud/deleteParty/${partyId}`);
      console.log(`Party with ID ${partyId} deleted successfully.`);
      fetchPartitData();
    } catch (error) {
      console.error(`Error deleting party with ID ${partyId}:`, error);
    }
  };

  const deletePlayer = async (playerId) => {
    try {
      await axios.delete(`http://localhost:5001/crudtest/deletePlayerById/${playerId}`);
      console.log(`Ndertesa with ID ${playerId} deleted successfully.`);
      fetchPlayerData();
    } catch (error) {
      console.error(`Error deleting party with ID ${playerId}:`, error);
    }
  };

  const deleteTeam = async (teamId) => {
    try {
      await axios.put(`http://localhost:5001/crudtest/deleteTeamById/${teamId}`);
      console.log(`Lifti with ID ${teamId} deleted successfully.`);
      setplayerdata(teamId, true);
    } catch (error) {
      console.error(`Error deleting party with ID ${teamId}:`, error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchKandidatData();
    fetchPartitData();
    fetchPlayerData();
    fetchTeamData();
  }, []);

  const filteredCandidates = kandidatdata.filter((candidate) => {
    return (
      (candidate.name && candidate.name.toLowerCase().includes(candidateFilter.toLowerCase())) ||
      (candidate.surname && candidate.surname.toLowerCase().includes(candidateFilter.toLowerCase())) ||
      (candidate.party && candidate.party.toLowerCase().includes(candidateFilter.toLowerCase())) ||
      (candidate.election && candidate.election.toLowerCase().includes(candidateFilter.toLowerCase())) ||
      (candidate.city && candidate.city.toLowerCase().includes(candidateFilter.toLowerCase()))
    );
  });

  const filteredUsers = userdata.filter((user) => {
    return user.personalnumber.toLowerCase().includes(userFilter.toLowerCase());
  });

  // const filteredLifti = liftidata.filter((lifti) => {
  //   return lifti.personalnumber.toLowerCase().includes(liftiFilter.toLowerCase());
  // });

  // const filteredNdertesa = ndertesadata.filter((ndertesa) => {
  //   const nameLowerCase = ndertesa.name ? ndertesa.name.toLowerCase() : '';
  //   const dateLowerCase = ndertesa.date ? ndertesa.date.toLowerCase() : '';
  
  //   return (
  //     nameLowerCase.includes(ndertesaFilter.toLowerCase()) ||
  //     dateLowerCase.includes(ndertesaFilter.toLowerCase())
  //     // Add additional conditions for other fields in the ndertesa model, if needed
  //   );
  // });

  const filteredParties = partitdata.filter((party) => {
    return party.name.toLowerCase().includes(partyFilter.toLowerCase());
  });

  return (
    <>
    <Header/>
    <Sidebar/>
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
        <button
          className={`button ${showPlayertable ? 'active' : ''}`}
          onClick={() => toggleTable('Player')}
        >
          Player
        </button>
        <button
          className={`button ${showTeamtable ? 'active' : ''}`}
          onClick={() => toggleTable('Team')}
        >
          Team
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
                  value={userFilter}
                  onChange={(e) => setUserFilter(e.target.value)}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Numri Personal</th>
                  </tr>
                  {filteredUsers.map((i) => {
                    return (
                      <tr key={i._id}>
                        <td className='data'>{i.personalnumber}</td>
                        <td className='buttons'>
                          <Link to="/admin-page">
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteUser(i._id)} />
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
                  value={candidateFilter}
                  onChange={(e) => setCandidateFilter(e.target.value)}
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
                      <tr key={i._id}>
                        <td>{i.name}</td>
                        <td>{i.surname}</td>
                        <td>{i.party}</td>
                        <td>{i.election}</td>
                        <td>{i.city}</td>
                        <td className='buttons'>
                          <Link to='/delete'>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteCandidate(i._id)} />
                          </Link>
                          <Link to={`/upadatecandidate/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
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
                  value={partyFilter}
                  onChange={(e) => setPartyFilter(e.target.value)}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Emri</th>
                  </tr>
                  {partitdata.map((i) => {
                    return (
                      <tr key={i._id}>
                        <td>{i.name}</td>
                        <td className='buttons'>
                          <Link to={`/delete`}>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteParty(i._id)} />
                          </Link>
                          <Link to={`/updateparty/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
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

        {showPlayertable && (
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <table>
                <thead>
                  <tr>
                    <th>Emri</th>
                    <th>Number</th>
                    <th>Birthyear</th>
                    <th>Team</th>
                  </tr>
                  {playerdata.map((i) => {
                    return (
                      <tr key={i._id}>
                        <td>{i.name}</td>
                        <td>{i.number}</td>
                        <td>{i.birthyear}</td>
                        <td>{i.team}</td>
                        <td className='buttons'>
                          <Link to={`/delete`}>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deletePlayer(i._id)} />
                          </Link>
                          <Link to={`/updatendertesa/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </thead>
              </table>
              <div className='add-button'>
                <button><Link to="/shtonplayer">Shto Player</Link></button>
              </div>
            </div>
          </div>
        )}

        {showTeamtable && (
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <table>
                <thead>
                  <tr>
                    <th>Emri</th>
                  </tr>
                  {teamdata.map((i) => {
                    return (
                      <tr key={i._id}>
                        <td>{i.name}</td>
                        <td className='buttons'>
                          <Link to={`/delete`}>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteTeam(i._id)} />
                          </Link>
                          <Link to={`/updatelifti/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </thead>
              </table>
              <div className='add-button'>
                <button><Link to="/shtoteam">Shto Team</Link></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default MenagmentPage;

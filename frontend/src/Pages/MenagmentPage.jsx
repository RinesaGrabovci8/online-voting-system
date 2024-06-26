import React, { useEffect, useState } from 'react';
import '../CSS/adminhome.css';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function MenagmentPage() {
  const [showPerdoruesitTable, setShowPerdoruesitTable] = useState(false);
  const [showKandidatetTable, setShowKandidatetTable] = useState(false);
  const [showPartiteTable, setShowPartiteTable] = useState(false);
  const [showmovietable, setshowmovietable] = useState(false);
  const [showdirectortable, setshowdirectortable] = useState(false)

  const [userFilter, setUserFilter] = useState('');
  const [candidateFilter, setCandidateFilter] = useState('');
  const [partyFilter, setPartyFilter] = useState('');
  // const [ndertesaFilter, setndertesaFilter] = useState('');
  // const [liftiFilter, setliftiFilter] = useState('');

  const [userdata, setuserData] = useState([]);
  const [kandidatdata, setkandidatData] = useState([]);
  const [partitdata, setpartitData] = useState([]);
  const [moviedata, setmoviedata] = useState([]);
  const [directordata, setdirectordata] = useState([]);

  const toggleTable = (table) => {
    setShowPerdoruesitTable(false);
    setShowKandidatetTable(false);
    setShowPartiteTable(false);
    setshowmovietable(false);
    setshowdirectortable(false);

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
      case 'movie':
        setshowmovietable(true);
        break;
      case 'director':
        setshowdirectortable(true);
        break;
      default:
        break;
    }
  };

  const fetchmovieData = async () => {
    try {
      const response = await fetch("http://localhost:5001/crudtest/getAllmovie");
      const moviedata = await response.json();
      setmoviedata(moviedata.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchdirectorData = async () => {
    try {
      const response = await fetch("http://localhost:5001/crudtest/getAlldirector");
      const directordata = await response.json();
      setdirectordata(directordata.data);
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

  const deletemovie = async (movieId) => {
    try {
      await axios.delete(`http://localhost:5001/crudtest/deletemovieById/${movieId}`);
      console.log(`Ndertesa with ID ${movieId} deleted successfully.`);
      fetchmovieData();
    } catch (error) {
      console.error(`Error deleting party with ID ${movieId}:`, error);
    }
  };

  const deletedirector = async (directorId) => {
    try {
      await axios.delete(`http://localhost:5001/crudtest/deletedirectorById/${directorId}`);
      console.log(`Lifti with ID ${directorId} deleted successfully.`);
      setmoviedata(directorId, true);
    } catch (error) {
      console.error(`Error deleting party with ID ${directorId}:`, error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchKandidatData();
    fetchPartitData();
    fetchmovieData();
    fetchdirectorData();
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

  const filteredParties = partitdata.filter((party) => {
    return party.name.toLowerCase().includes(partyFilter.toLowerCase());
  });

  return (
    <>
      <Header />
      <Sidebar />
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
            className={`button ${showmovietable ? 'active' : ''}`}
            onClick={() => toggleTable('movie')}
          >
            movie
          </button>
          <button
            className={`button ${showdirectortable ? 'active' : ''}`}
            onClick={() => toggleTable('director')}
          >
            director
          </button>
        </div>
        <div className='table-container'>

          {showPerdoruesitTable && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <input
                  type="text"
                  placeholder="Filtero Kandidatet"
                  value={userFilter}
                  onChange={(e) => setUserFilter(e.target.value)}
                /></div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Numri Personal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsers.map((i) => (
                      <TableRow
                        key={i.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {i.personalnumber}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link to="/admin-page">
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteUser(i._id)} />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

          )}
          {showKandidatetTable && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Filtero Kandidatet" F
                value={candidateFilter}
                onChange={(e) => setCandidateFilter(e.target.value)}
              />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Emri</TableCell>
                      <TableCell>Mbiemri</TableCell>
                      <TableCell>Partia</TableCell>
                      <TableCell>Zgjedhjet</TableCell>
                      <TableCell>Qyteti</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredCandidates.map((i) => (
                      <TableRow
                        key={i.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {i.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.surname}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.party}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.election}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.city}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link to='/delete'>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteCandidate(i._id)} />
                          </Link>
                          <Link to={`/upadatecandidate/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='add-button'>
                <button><Link to="/shtokandidat">Shto Kandidat</Link></button>
              </div>
            </div>
          )}

          {showPartiteTable && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Filtero Partite"
                value={partyFilter}
                onChange={(e) => setPartyFilter(e.target.value)}
              />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Emri</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredParties.map((i) => (
                      <TableRow
                        key={i.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {i.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link to={`/delete`}>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deleteParty(i._id)} />
                          </Link>
                          <Link to={`/updateparty/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='add-button'>
                <button><Link to="/shtoparti">Shto Parti</Link></button>
              </div>
            </div>
          )}

          {showmovietable && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Emri</TableCell>
                      <TableCell>title</TableCell>
                      <TableCell>year</TableCell>
                      <TableCell>director</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {moviedata.map((i) => (
                      <TableRow
                        key={i.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {i.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.title}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.year}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.director}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link to={`/delete`}>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deletemovie(i._id)} />
                          </Link>
                          <Link to={`/updatemovie/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='add-button'>
                <button><Link to="/shtomovie">Shto movie</Link></button>
              </div>
            </div>
          )}

          {showdirectortable && (
            // <div className='auth-wrapper'>
            //   <div className='auth-inner'>
            //     <table>
            //       <thead>
            //         <tr>
            //           <th>Emri</th>
            //           <th>birthyear</th>
            //         </tr>
            //         {directordata.map((i) => {
            //           return (
            //             <tr key={i._id}>
            //               <td>{i.name}</td>
            //               <td>{i.birthyear}</td>
            //               <td className='buttons'>
            // <Link to={`/delete`}>
            //   <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deletedirector(i._id)} />
            // </Link>
            // <Link to={`/updatedirector/${i._id}`}>
            //   <EditIcon style={{ fontSize: '16px', margin: 8 }} />
            // </Link>
            //               </td>
            //             </tr>
            //           );
            //         })}
            //       </thead>
            //     </table>
            // <div className='add-button'>
            //   <button><Link to="/shtodirector">Shto director</Link></button>
            // </div>
            //   </div>
            // </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Emri</TableCell>
                      <TableCell>birthyear</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {directordata.map((i) => (
                      <TableRow
                        key={i.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {i.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {i.birthyear}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link to={`/delete`}>
                            <DeleteIcon style={{ color: 'red', fontSize: '16px', margin: 8 }} onClick={() => deletedirector(i._id)} />
                          </Link>
                          <Link to={`/updatedirector/${i._id}`}>
                            <EditIcon style={{ fontSize: '16px', margin: 8 }} />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='add-button'>
                <button><Link to="/shtodirector">Shto director</Link></button>
              </div>
            </div>
          )}

        </div>
      </div >
      <Footer />
    </>
  );
}

export default MenagmentPage;

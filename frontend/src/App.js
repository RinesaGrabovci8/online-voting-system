import logo from './logo.svg';
import './App.css';
import Voto from './JSX/Votoketu';
import Home from './JSX/Home';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

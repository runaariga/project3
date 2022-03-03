import logo from './logo.svg';
import './App.css';
import MusicBar from './components/musicBar';
import Navbar from './components/navbar';
import Blob from './components/blob';
import Login from './components/login';
import Dashboard from './components/dashboard';
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App min-h-screen bg-myyellow-100 ">
      <Navbar navStyle='text-mybrown-300 font-bold' />
      {code ? <Dashboard code={code} /> : <Login />}
      <MusicBar divStyle='bg-mybrown-300 text-white' />
    </div>
  );
}

export default App;

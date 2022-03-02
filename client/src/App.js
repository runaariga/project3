import logo from './logo.svg';
import './App.css';
import MusicBar from './components/musicBar';
import Navbar from './components/navbar';
import Blob from './components/blob'
function App() {
  return (
    <div className="App min-h-screen bg-myyellow-100">
      <Navbar navStyle='text-mybrown-300 font-bold' />
      <Blob />
      <MusicBar divStyle='bg-mybrown-300 text-white' />
    </div>
  );
}

export default App;

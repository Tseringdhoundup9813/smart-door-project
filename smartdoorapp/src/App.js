
import './App.css';
import Doorslidersystem from './components/Doorslidersystem';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
     <Doorslidersystem></Doorslidersystem>
     
    </div>
  );
}

export default App;

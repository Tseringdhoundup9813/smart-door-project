//react router 
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Doorslidersystem from './components/Doorslidersystem';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;

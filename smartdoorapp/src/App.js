
//react router 
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';


import Aadmin from './admin/admin'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/main/admin" element={<Aadmin />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
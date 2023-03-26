
//react router 
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';


// css
import './style/aadmin.css';


//admin navbar
import AdminNavbar from './admin/AdminNavbar';
import AdminTop from './admin/AdminTop';

import Dashboard from './admin/Navlink/Dashboard';
import List from './admin/Orderlist'

import Order from './admin/Navlink/Order';
function Aadmin (){
    return(
    <div>
      <BrowserRouter>
      
      
        <div id="admin">
            <div className="row row-admin">
                <AdminNavbar></AdminNavbar>
                <div className="col-md-10 col-sm-12 admin-main">
                    <AdminTop></AdminTop>
                    
                    <Routes>
                        <Route path="/admin" element={<Dashboard />} />
                        <Route path="/admin/order" element={<List/>}/>
                    </Routes>
                
                </div>
            </div>
           
        </div>
      </BrowserRouter>
    </div>
    )
}

export default Aadmin;
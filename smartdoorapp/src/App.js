
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

import Chats from './admin/Navlink/Chats';
import Products from './admin/Navlink/Products';
import Inbox from './admin/Navlink/Inbox';
import Pages from "./admin/Navlink/Pages";
import Media from "./admin/Navlink/Media";

import AddProduct from './admin/Navlink/AddProduct'
import UpdateProduct from "./admin/Navlink/UpdateProduct";
import Categories from './admin/Navlink/Categories';
import OrderView from "./admin/Navlink/OrderView";
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
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/order" element={<List/>}/>
                        <Route path="/admin/chats" element={<Chats/>}/>
                        <Route path="/admin/products" element={<Products/>}/>
                        <Route path="/admin/inbox" element={<Inbox/>}/>
                        <Route path="/admin/pages" element={<Pages/>}/>
                        <Route path="/admin/media" element={<Media/>}/>
                        <Route path="/admin/products/edit" element={<UpdateProduct/>}/>
                        <Route path="/admin/add-products" element={<AddProduct/>}/>
                        <Route path="/admin/categories" element={<Categories/>}/>
                        <Route path="/admin/order/order-view" element={<OrderView/>}/>
                    </Routes>
                
                </div>
            </div>
           
        </div>
      </BrowserRouter>
    </div>
    )
}

export default Aadmin;
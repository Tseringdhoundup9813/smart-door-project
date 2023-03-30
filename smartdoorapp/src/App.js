import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import { useState,useContext } from 'react';

// import Doorslidersystem from './components/Doorslidersystem';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Product from './components/Product';
import Productview from './components/ProductView';
// import Admin from "./components/Admin";
import Admin from "./layout/AdminLayout"

import ProductCart from './components/productCart';
import Faqs from './components/Faqs';
import Vision from "./components/vision";
import Story from './components/Story'
import NotFound from './layout/NotFound'

// layouts
import RootLayout from './layout/RootLayout';
//   import AdminLayout from './layout/AdminLayout';

// css
import './style/aadmin.css';

import Dashboard from './admin/Navlink/Dashboard';
import List from './admin/Orderlist'

import Chats from './admin/Navlink/Chats';
import Products from './admin/Navlink/Products';
import Inbox from './admin/Navlink/Inbox';
import Pages from "./admin/Navlink/Pages";
import Media from "./admin/Navlink/Media";

import AddProduct from './components/Admin'
import UpdateProduct from "./admin/Navlink/UpdateProduct";
import Categories from './admin/Navlink/Categories';

import { loginContext } from './components/Context';
import BuyNow from './components/BuyNow';
import PlaceOrder from './components/PlaceOrder';

import EmailVerification from './components/EmailVerification'
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-cart" element={<ProductCart />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about/our-vision" element={<Vision />} />
      <Route path="/about/our-story" element={<Story />} />
      <Route path="/product/buy-now" element={<BuyNow />} />
      <Route path="/product/placeorder" element={<PlaceOrder />} />
      <Route path="/user/:id/verify/:token" element={<EmailVerification/>} />
      <Route path="*" element={<NotFound/>}/>


      {/* for admin */}
      <Route path='/admin' element={<Admin/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="order" element={<List/>}/>
        <Route path="chats" element={<Chats/>}/>
        <Route path="inbox" element={<Inbox/>}/>
        <Route path="pages" element={<Pages/>}/>
        <Route path="media" element={<Media/>}/>
        <Route path="add-products" element={<AddProduct/>}/>
        <Route path="products" element={<Products/>}/>

        <Route path="edit" element={<UpdateProduct/>}/>
        <Route path="categories" element={<Categories/>}/>

      </Route>

      
      <Route path="/product/page-view:productId" element={<Productview />} />
    </Route>

  ))
function App() {
  const[successLogin,setSuccessLogin] = useState(false);
  const[validationBox,setValidationBox]= useState(false);
  return (
   <div>
   
   <loginContext.Provider value={{successLogin,setSuccessLogin,validationBox,setValidationBox}}>

       <RouterProvider router={router} />
    </loginContext.Provider>

     
   

   </div>
  );
}

export default App;
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
import NotFound from './layout/NotFound';
import OrderTracking from './components/OrderTracking';

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

import EmailVerification from './components/EmailVerification';
import Protected from './components/Protected';


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
      <Route path="/product/buy-now" element={<Protected Component={BuyNow} />} />
      <Route path="/product/placeorder" element={<PlaceOrder />} />
      <Route path="/product/order-tracking" element={<OrderTracking/>} />
      <Route path="/user/:id/verify/:token" element={<EmailVerification/>} />

      <Route path="*" element={<NotFound/>}/>


      {/* for admin */}
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path="/admin/order" element={<List/>}/>
        <Route path="admin/add-products" element={<UpdateProduct/>}/>
        <Route path="admin/categories" element={<Categories/>}/>

        <Route path="admin/chats" element={<Chats/>}/>
        <Route path="admin/inbox" element={<Inbox/>}/>
        <Route path="admin/pages" element={<Pages/>}/>
        <Route path="admin/media" element={<Media/>}/>
        <Route path="admin/products" element={<Products/>}/>

        <Route path="admin/edit" element={<AddProduct/>}/>


      
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
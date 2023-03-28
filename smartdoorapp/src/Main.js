
//react router 
import { BrowserRouter, Routes, Route} from "react-router-dom";


// import Doorslidersystem from './components/Doorslidersystem';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Product from './components/Product';
import Productview from './components/ProductView';
// import Admin from "./components/Admin";

import ProductCart from './components/productCart';
import Faqs from './components/Faqs';
import Vision from "./components/vision";
import Story from './components/Story'


//
import { useParams } from 'react-router-dom';
function Main() {
  const {para}=useParams();
  console.log(para)
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-view" element={<Productview />} />
        <Route path="/product-cart" element={<ProductCart />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about/our-vision" element={<Vision />} />
        <Route path="/about/our-story" element={<Story />} />
        
        <Route path="/product/:productId" element={<Productview />} />
        {/* <Route path="/admin" element={<Admin></Admin>}></Route> */}

        </Routes>

        
      <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default Main;
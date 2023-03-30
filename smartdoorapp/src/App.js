
//react router 
import { BrowserRouter, Routes, Route} from "react-router-dom";

//react router 
import { BrowserRouter, Routes, Route} from "react-router-dom";

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

function App() {

  const[successLogin,setSuccessLogin] = useState(false);
  const[validationBox,setValidationBox]= useState(false);


  return (
    <BrowserRouter>
    <div id="main">

    <loginContext.Provider value={{successLogin,setSuccessLogin,validationBox,setValidationBox}}>
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
    

    
        <Route path="/product/page-view:productId" element={<Productview />} />
        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>

      <Footer></Footer>
      </loginContext.Provider>

    </div>


 
  </BrowserRouter>
  );
}

export default App;
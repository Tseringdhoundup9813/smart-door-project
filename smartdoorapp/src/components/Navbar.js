//import css
import '../style/Navbar.css';


//router
import {NavLink} from 'react-router-dom'
function Navbar (){
    const searchbtn = () => {
       let searchInput=document.querySelector('.search-input')
       searchInput.style.display = "flex" ;
    }
    const searchClose=()=>{
        let searchInput=document.querySelector('.search-input')
        searchInput.style.display = "none" ;
    }
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-body-tertiary ">
                <div className="container-fluid navbar-container">
                    <a className="navbar-brand navbar-img" href="#">
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="toggler-icon top-bar"></span>
                    <span class="toggler-icon middle-bar"></span>
                    <span class="toggler-icon bottom-bar"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-search-sm row d-flex align-items-center justify-content-center">
                    <div className="navbar-sm-search col-1"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <div className="navbar-sm-input col-11"><input type="text" placeholder="search..."  /></div>

                    </div>
                    <ul className="navbar-nav navbar-ul">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link text-capitalize">home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/product" className="nav-link text-capitalize">product</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                            <NavLink to="/about/our-vision" className=" dropdown-item nav-link text-capitalize">our vision</NavLink>
                            </li>
                            <li><a class="dropdown-item" href="#">our story</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/Faqs" className="nav-link text-capitalize">FAQs</NavLink>

                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" className="nav-link text-capitalize">contact us</NavLink>
                        </li>
                        <div className="search-icon" onClick={searchbtn}><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className="two-icon">
                        <div className="heart-icon"><i class="fa-regular fa-heart"></i></div>
                        <NavLink to="/product-cart" className=" nav-link cart-icon"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                        <div className="cart-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                        </div>
                        <div  className="navbar-signbtn btn">Sign In</div>
                        <div  className="search-input bg-tertiary" >
                        <input type="text" placeholder="search..."  />
                        <div className="search-close" onClick={searchClose}><i class="fa-solid fa-xmark"></i></div>
                        </div>

                    </ul>
                    </div>
                    <div className="navbar-sm">
                        <div className="signbtn"><i class="fa-regular fa-user"></i></div>
                        <div className="likebtn"><i class="fa-regular fa-heart"></i></div>
                        <NavLink to="/product-cart" className=" nav-link cart-icon"><i class="fa-solid fa-cart-shopping"></i></NavLink>

                        <div className="bagbtn"><i class="fa-solid fa-bag-shopping"></i></div>
                    </div>
                    <div className="navbar-img-sm">
                    </div>
                    
                </div>
            </nav>
        </div>

    )
}
export default Navbar;
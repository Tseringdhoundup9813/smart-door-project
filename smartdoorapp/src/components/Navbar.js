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
                    <span className="navbar-toggler-icon"></span>
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
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">FAQs</a>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" className="nav-link text-capitalize">contact us</NavLink>
                        </li>
                        <div className="search-icon" onClick={searchbtn}><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className="two-icon">
                        <div className="heart-icon"><i class="fa-regular fa-heart"></i></div>
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
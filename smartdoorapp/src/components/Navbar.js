//import css
import '../style/Navbar.css';


//router
import {NavLink} from 'react-router-dom'
function Navbar (){
    const searchbtn = () => {
       let searchInput=document.querySelector('.search-input')
       searchInput.style.display = "flex" ;

       var x = window.matchMedia("(max-width: 768px)")
       if (x.matches) { // If media query matches
         var nav =document.querySelector('.nav-link')
           document.querySelector('.navabr-toggler').click()
       } 
    }
    const searchClose=()=>{
        let searchInput=document.querySelector('.search-input')
        searchInput.style.display = "none" ;

        var x = window.matchMedia("(max-width: 768px)")
        if (x.matches) { // If media query matches
          var nav =document.querySelector('.nav-link')
            document.querySelector('.navabr-toggler').click()
        } 
    }
    const navItem=()=>{
            var x = window.matchMedia("(max-width: 768px)")
              if (x.matches) { // If media query matches
                var nav =document.querySelector('.nav-link')
                  document.querySelector('.navabr-toggler').click()
              } 
    }
    
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-body-tertiary ">
                <div className="container-fluid navbar-container">
                    <a className="navbar-brand navbar-img" href="#">
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-search-sm row d-flex align-items-center justify-content-center">
                    <div className="navbar-sm-search col-1"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <div className="navbar-sm-input col-11"><input type="text" placeholder="search..."  /></div>

                    </div>
                    <ul className="navbar-nav navbar-ul">
                        <li className="nav-item" >
                        <NavLink to="/" className="nav-link text-capitalize" onClick={navItem}> home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/product" className="nav-link text-capitalize" onClick={navItem}>product</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                            <NavLink to="/about/our-vision" onClick={navItem} className=" dropdown-item nav-link text-capitalize">our vision</NavLink>
                            </li>
                            <li>
                            <NavLink to="/about/our-story" onClick={navItem} className=" dropdown-item nav-link text-capitalize">our story</NavLink>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/Faqs"  onClick={navItem} className="nav-link text-capitalize">FAQs</NavLink>

                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" onClick={navItem} className="nav-link text-capitalize">contact us</NavLink>
                        </li>
                        <div className="search-icon"  onClick={searchbtn}><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className="two-icon">
                        <NavLink to="/login" className=" dropdown-item nav-link text-capitalize"><div className="heart-icon"><i class="fa-regular fa-user"></i></div></NavLink>

                        <div className="heart-icon"><i class="fa-regular fa-heart"></i></div>
                        
                        <NavLink to="/product-cart" className=" nav-link cart-icon"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                        </div>
                        <div  className="navbar-signbtn btn">membership</div>
                        <div  className="search-input bg-tertiary" >
                        <input type="text" placeholder="search..."  />
                        <div className="search-close" onClick={searchClose}><i class="fa-solid fa-xmark"></i></div>
                        </div>

                    </ul>
                    </div>
                    <div className="navbar-sm">
                        <div className="signbtn"><i class="fa-regular fa-user"></i></div>
                        <div className="likebtn"><i class="fa-regular fa-heart"></i></div>
                        <div className="cart"><NavLink to="/product-cart" className=" nav-link cart-icon"><i class="fa-solid fa-cart-shopping"></i></NavLink>
</div>
                    </div>
                    <div className="navbar-img-sm">
                    </div>
                    
                </div>
            </nav>
        </div>

    )
}
export default Navbar;
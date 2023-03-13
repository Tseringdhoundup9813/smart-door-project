//import css
import '../style/Navbar.css';
import logo from "../image/logo/smart-doors-logo.png"
function Navbar (){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <a className="nav-link active text-capitalize" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">My accounts</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">FAQs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-capitalize" href="#">contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Navbar;
//router
import {NavLink} from 'react-router-dom'


function AdminNavbar(){
    const navClose=()=>{
        document.querySelector('.admin-sidebar').style.transform='translate(-300%, 0)';
    }
    return(
        <div className="col-md-2  admin-sidebar">
                    <div className="d-flex justify-content-around align-items-center w-100 my-2 sm-relative">
                        <div className="sidebar-logo">
                        </div>
                        <div className="sidebar-sm-btn" onClick={navClose}>
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <div className="side-chat text-capitalize nav-item ">
                        <NavLink to="/admin/dashboard" className="nav-link sidechatNav ">
                            <div className="side-icon">
                            <i class="fa-solid fa-chart-line"></i></div>Dashboard
                        </NavLink>
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                            <NavLink to="/admin/products"  className=" nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-solid fa-upload"></i></div>products
                           </NavLink>
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                            <NavLink to="/admin/add-products"  className=" nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-solid fa-upload"></i></div>add products
                           </NavLink>
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                            <NavLink to="/admin/categories"  className=" nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-solid fa-upload"></i></div>Categories
                           </NavLink>
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                           <NavLink to="/admin/order"  className="nav-link sidechatNav">
                           <div className="side-icon"><i class="fa-regular fa-calendar-check"></i></div>order
                           </NavLink>
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                        <NavLink to="/admin/chats" className="nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-regular fa-message"></i></div>chats
                        </NavLink>
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                            
                            <NavLink to="/admin/inbox" className="nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-solid fa-inbox"></i></div>inbox
                        </NavLink>
                        </div>
                        
                        
                        <div className="side-chat text-capitalize nav-item">
                            <NavLink to="/admin/media"  className="nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-solid fa-file"></i></div>media
                           </NavLink>
                            
                        </div>
                        <div className="side-chat text-capitalize nav-item">
                            <NavLink to="/admin/pages"  className="nav-link sidechatNav">
                            <div className="side-icon"><i class="fa-solid fa-file"></i></div>pages
                           </NavLink>
                            
                        </div>
                    </div>
                </div>
    )
}

export default AdminNavbar;
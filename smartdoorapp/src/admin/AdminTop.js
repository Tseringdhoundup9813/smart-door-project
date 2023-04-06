function AdminTop (){
    const adBar=()=>{
        console.log('ghi')
        document.querySelector('.admin-sidebar').style.transform='translate(0, 0)'
        document.querySelector('.admin-sidebar').style.display="flex"
    }
    return(
        <div className="admin-main-nav">
                        <div className="ad-nav-btn d-md-none d-sm-block" onClick={adBar}>
                        <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className="admin-input d-flex  justify-content-around align-items-center">
                            <div className="ad-search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                            <div className="ad-search-input"><input type="text" placeholder="Type to search..." /></div>
                        </div>
                        <div className="admin-pro d-flex align-items-center justify-content-between">
                          <div className="ad-icon d-flex"> 
                           <div className="ad-bell me-2">
                            <i class="fa-regular fa-bell"></i>
                            </div>
                            <div className="ad-message">
                            <i class="fa-regular fa-message"></i>
                            </div>
                            </div>
                           <div className="d-flex align-items-center">
                           <div className="mx-2"><div className="ad-name text-capitalize text-end">Admin Name</div>
                            <div className="ad-name-pos text-end">Admin</div></div>
                            <div className="admin-pro-img">
                            </div>
                            <div className="admin-pro-icon"><i class="fa-solid fa-angle-down"></i></div>
                           </div>
                        </div>
                    </div>
    )
}

export default AdminTop;
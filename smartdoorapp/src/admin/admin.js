// css
import '../style/aadmin.css';

function Aadmin (){
    const adBar=()=>{
        console.log('ghi')
        document.querySelector('.admin-sidebar').style.transform='translate(0, 0)'
        document.querySelector('.admin-sidebar').style.display="flex"

    }
    const navClose=()=>{
        document.querySelector('.admin-sidebar').style.transform='translate(-300%, 0)'
    }
    return(
    <div>
        <div id="admin">
            <div className="row row-admin">
                <div className="col-md-2  admin-sidebar">
                    <div className="d-flex justify-content-around align-items-center w-100 my-2">
                        <div className="sidebar-logo">
                        </div>
                        <div className="sidebar-sm-btn" onClick={navClose}>
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <div className="side-chat text-capitalize active"><div className="side-icon"><i class="fa-solid fa-chart-line"></i></div>Dashboard</div>
                        <div className="side-chat text-capitalize"><div className="side-icon"><i class="fa-regular fa-message"></i></div>chats</div>
                        <div className="side-chat text-capitalize"><div className="side-icon"><i class="fa-solid fa-inbox"></i></div>inbox</div>
                        <div className="side-chat text-capitalize"><div className="side-icon"><i class="fa-regular fa-calendar-check"></i></div>order</div>
                        <div className="side-chat text-capitalize"><div className="side-icon"><i class="fa-solid fa-upload"></i></div>post</div>
                        <div className="side-chat text-capitalize"><div className="side-icon"><i class="fa-solid fa-file"></i></div>media</div>
                        <div className="side-chat text-capitalize"><div className="side-icon"><i class="fa-solid fa-file"></i></div>pages</div>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12 admin-main">
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

                    {/* ====graph===== */}
                    <div className="row row-graph">
                    <div className="col-lg-4 col-md-5 col-sm-5 graph-card">
                        <div className="graph-detail">
                            <div className="d-flex  justify-content-between graph-produced">
                            <div className="graph-head">
                               <span className="fw-bold"> Sales by category </span><br />
                                detailed sales data
                            </div>
                                <div className="graph-month">
                                    <select name="months" id="" className="graph-mth-ind">
                                        <option value="month">Janurary</option>
                                        <option value="month">Febrary</option>
                                        <option value="month">March</option>
                                        <option value="month">April</option>
                                    </select>
                                </div>
                            </div>

                            <div className="graph-circle"></div>

                            <div>
                                <div className="produced d-flex align-items-center">
                                    <div className="produced-indi">
                                    </div>
                                    <div className="produced-name">Product Produced</div>
                                </div>
                                <div className="produced d-flex align-items-center">
                                    <div className="product-indi">
                                    </div>
                                    <div className="produced-name">Product sold</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-5 graph-card">
                    <div className="graph-detail">
                            <div className="d-flex  justify-content-between graph-produced">
                            <div className="graph-head">
                               <span className="fw-bold"> Sales by category </span><br />
                                detailed sales data
                            </div>
                                <div className="graph-month">
                                    <select name="months" id="" className="graph-mth-ind">
                                        <option value="month">Janurary</option>
                                        <option value="month">Febrary</option>
                                        <option value="month">March</option>
                                        <option value="month">April</option>
                                    </select>
                                </div>
                            </div>

                            <div className="graph-circle"></div>

                            <div >
                                <div className="produced d-flex align-items-center">
                                    <div className="produced-indi">
                                    </div>
                                    <div className="produced-name">Product Produced</div>
                                </div>
                                <div className="produced d-flex align-items-center">
                                    <div className="product-indi">
                                    </div>
                                    <div className="produced-name">Product sold</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-2 admin-view">
                        <div className="circle-detail d-flex flex-md-cloumn align-items-center ">
                            <div className="c-detail-icon"><i class="fa-solid fa-globe"></i></div>
                            <div className="c-detail-number">
                                <div className="c-d-number">455</div>
                                <div className="c-d-name text-capitalize">total number of visit</div>
                            </div>
                            <div className="c-detail-dot">
                            <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div className="circle-detail d-flex flex-md-cloumn align-items-center  ">
                            <div className="c-detail-icon"><i class="fa-regular fa-user"></i></div>
                            <div className="c-detail-number">
                                <div className="c-d-number">4</div>
                                <div className="c-d-name text-capitalize">New clients</div>
                            </div>
                            <div className="c-detail-dot">
                            <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div className="circle-detail d-flex align-items-center  ">
                            <div className="c-detail-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                            <div className="c-detail-number">
                                <div className="c-d-number">5</div>
                                <div className="c-d-name text-capitalize">New sales</div>
                            </div>
                            <div className="c-detail-dot">
                            <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* =====order-list===== */}
                    <div className="row row-order-list">
                        <h3 className="text-capitalize">order list</h3>

                        <div className="col-12 main-ol">
                            <div className="order-list ol-head">

                            <div className="ol-name fw-bolder text-capitalize">customer</div>
                            <div className="ol-name fw-bolder text-capitalize">product</div>
                            <div className="ol-name fw-bolder text-capitalize">order number</div>
                            <div className="ol-name fw-bolder text-capitalize">date</div>
                            <div className="ol-name fw-bolder text-capitalize">status</div>
                            <div className="ol-name fw-bolder text-capitalize">confirmation</div>
                            </div>

                            <div className="order-list customer-cus align-items-center justify-content-start">
                                <div className="cus-detail">
                                    <div className="cus-name">Ram shah</div>
                                    <div className="cus-email">ramshah123@gmail.com</div>
                                </div>

                                <div className="cus-product">
                                    <div className="cusp-model">SD102</div>
                                    <div className="cus-color">Antrek</div>
                                </div>

                                <div className="cus-order-number">
                                    #9dfad767
                                </div>

                                <div className="cus-date">
                                    10 march 2023
                                </div>

                                <div className="cus-status">
                                  <div>
                                  <select name="status" id="">
                                        <option value="pending">pending</option>
                                        <option value="shipped">shipped</option>
                                        <option value="canceled">canceled</option>
                                        <option value="delivery">delivered</option>
                                    </select>
                                  </div>
                                </div>

                                <div>
                                    <span className="cus-confirm">confirm order</span>
                                </div>
                            </div>

                            <div className="order-list customer-cus align-items-center justify-content-start">
                                <div className="cus-detail">
                                    <div className="cus-name">Ram shah</div>
                                    <div className="cus-email">ramshah123@gmail.com</div>
                                </div>

                                <div className="cus-product">
                                    <div className="cusp-model">SD102</div>
                                    <div className="cus-color">Antrek</div>
                                </div>

                                <div className="cus-order-number">
                                    #9dfad767
                                </div>

                                <div className="cus-date">
                                    10 march 2023
                                </div>

                                <div className="cus-status">
                                  <div>
                                  <select name="status" id="">
                                        <option value="pending">pending</option>
                                        <option value="shipped">shipped</option>
                                        <option value="canceled">canceled</option>
                                        <option value="delivery">delivered</option>
                                    </select>
                                  </div>
                                </div>

                                <div>
                                    <span className="cus-confirm">confirm order</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========topproduct====== */}
                    <div className="row row-product-list">
                        <h3 className="text-capitalize">top products    </h3>

                        <div className="col-12 main-ol">
                            <div className="product-list ol-head">
                                <div className="pl-name text-capitalize">product</div>
                                <div className="pl-name text-capitalize">category</div>
                                <div className="pl-name text-capitalize">price</div>
                                <div className="pl-name text-capitalize">sold</div>
                                <div className="pl-name text-capitalize">stock left</div>
                            </div>

                            <div className="product-list pro-list align-items-center">
                                <div className="pro-detail d-flex align-items-center">
                                    <div className="pro-checkbox">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="pro-img"></div>
                                    <div className="pro-model">
                                        DDkg
                                    </div>
                                </div>

                                <div className="pro-cat">
                                    3d ddors
                                </div>

                                <div className="pro-price">Rs.400/-</div>

                                <div className="pro-sold">22</div>

                                <div className="pro-stock-left">34</div>
                            </div>

                            <div className="product-list pro-list align-items-center">
                                <div className="pro-detail d-flex align-items-center">
                                    <div className="pro-checkbox">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="pro-img"></div>
                                    <div className="pro-model">
                                        DDkg
                                    </div>
                                </div>

                                <div className="pro-cat">
                                    3d ddors
                                </div>

                                <div className="pro-price">Rs.400/-</div>

                                <div className="pro-sold">22</div>

                                <div className="pro-stock-left">34</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aadmin;
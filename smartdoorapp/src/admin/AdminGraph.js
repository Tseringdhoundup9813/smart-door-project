function AdminGraph(){
    return(
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
    )
}

export default AdminGraph;
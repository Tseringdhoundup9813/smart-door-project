// css
import '../style/Product-view.css';


function Productview(){
    return(
        <div>   
            {/* large screen */}

            <div className="row pv-row">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-3 pv-container">
                            <div className="pv-img"></div>
                            <div className="pv-img"></div>
                            <div className="pv-img"></div>
                        </div>
                        <div className="col-9 pv-main-img">
                            <div className="pvimg">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 pv-img-detail">
                    <div className="pv-heart-icon text-end">
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="pv-title">
                        3D Doors
                    </div>
                    <div className="pv-sub-title">
                        smart doors
                    </div>
                    <div className="pv-price-detail d-flex">
                        <div className="pv-price">Rs. 4500 original detail</div>
                        <div className="pv-price-question"><i class="fa-regular fa-circle-question"></i></div>
                    </div>

                    <div className="pv-more-ad">
                        <div className="d-flex align-items-center justify-content-center">
                        <div className="pv-more-checkbox"></div>
                        </div>   
                        <div className="d-flex align-items-center px-2 justify-content-between">
                            <div className="pv-more-detail ">
                           <div>
                           <div className="pv-more-title text-capitalize">
                                one-time order 
                            </div>
                            <div className="pv-more-p">
                                Order upto 10 doors for
                            </div>
                            <div className="pv-more-price">
                                Rs. 34000
                            </div>
                            </div>
                           </div>

                            <div className="pv-more-img">
                            <div className="pv-more-img-div"></div>
                        </div>
                        </div>
                        
                    </div>

                    <div className="pv-more-ad">
                        <div className="d-flex align-items-center  justify-content-center">
                        <div className="pv-more-checkbox">
                            <div className="pv-more-dark"></div>
                        </div>
                        </div>   
                        <div className="d-flex align-items-center px-2 justify-content-between">
                        <div className="pv-more-detail">
                            <div className="pv-more-title text-capitalize">
                                Membership
                            </div>
                            <div className="pv-more-p">
                                Get exclusive offer
                            </div>
                            <div className="pv-more-price">
                                Rs. 34000
                            </div>
                        </div>
                        <div>
                          <div className="pv-img-container">
                          <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                            <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                            <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                            <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Productview;
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
                    .
                </div>
            </div>


        </div>
    )
}

export default Productview;
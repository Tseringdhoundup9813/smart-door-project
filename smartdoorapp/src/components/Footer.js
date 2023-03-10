//home css
import '../style/Footer.css';

function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="row-footer row">
                    <div className="col-md-3 col-12">
                        <div className="footer-title text-capitalize">About Us</div>
                        <div className="footer-para">Smart Doors is an emerging door production Company located in Tokha-3, kathmandu. We provide our consumers with products of the highest caliber and with top rated customer service</div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="footer-title">company</div>
                        <div className="footer-ul">
                            <li><a href="#">product</a></li>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">contact</a></li>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="footer-title">Contact us</div>
                        <div className="footer-ul">
                            <li>Tokha - 3, kathmandu</li>
                            <li>9779802036938</li>
                            <li className="footer-none">Working Time: Mon-Sat: 9 AM – 5:30 PM</li>
                            <li className="footer-none">admin@smartdoors.com.np</li>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="footer-title">Lets talk</div>
                        <div className="footer-email"><input type="email"  placeholder="Enter your email id"requied/></div>
                        <div className="footer-sub-btn btn ">subscribe</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
//home css
import '../style/Footer.css';

function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="row-footer row">
                    <div className="col-sm-3 col-6">
                        <div className="footer-title text-capitalize">the basis</div>
                        <div className="footer-ul">
                            <li>How it works</li>
                            <li>Finding your fits</li>
                            <li>Buying on SD</li>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="footer-title">company</div>
                        <div className="footer-ul">
                            <li>Vision</li>
                            <li>Story</li>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="footer-title">Get help</div>
                        <div className="footer-ul">
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="footer-title">be social</div>
                        <div className="footer-social d-flex ">
                            <div className="footer-fb"><i class="fa-brands fa-facebook"></i></div>
                            <div className="footer-linkedin"><i class="fa-brands fa-linkedin"></i></div>
                        </div>
                    </div>
                </div>

                    <div className="row row-copy">
                    <div className="col-12 footer-copy my-2 d-flex align-items-center justify-content-center flex-column">
                        <div className="copyright">
                            &copy; 2023 Smart Doors. All Rights Reseved.
                        </div>
                        <div className="footer-terms d-flex">
                            <div className="f-terms">terms of Service</div>
                            <div className="f-privacy">Privacy Policy</div>
                            <div className="f-acc">Accessibility Statement</div>
                            <div className="f-cho">Your Privacy Choices</div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;
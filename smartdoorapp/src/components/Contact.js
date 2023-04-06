//import css
import '../style/Contact.css';
//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';
//aos 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Contact (){
    useEffect(()=>{
        AOS.init();
    })
    return(
        <div>
            <Navbar></Navbar>
            <div id="contact">
                <div className="row contact-map container-fluid">
                    <div className="col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.626763655633!2d85.32460421476105!3d27.759655882770268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1fe0ae5e987d%3A0x1ede3e5742df2552!2sSmart%20Doors!5e0!3m2!1sen!2snp!4v1679046090202!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="row row-form" >
                    <div className="col-xsm-12 col-sm-5 contact-detail" data-aos="fade-right">
                        <div className="contact-title text-uppercase">
                            get <span className="contact-title-blue"> in touch</span>
                        </div>
                        <div className="contact-para">
                        Thank you for visiting our website. We would like to hear from you if you
                        have any questions about our versatile range of products and services, or
                        if you feel there is anything we could add to our web page to help you in
                        future. If you have any questions relating to training, customer support or
                        refresher courses, please let us know as we will be pleased to assist.
                        </div>
                        <div className="contact-company-detail">
                            <div className="contact-c-name">Smart Doors Pvt.Ltd</div>
                            <div className="contact-c-location d-flex "> <div className="contact-c-loca-icon"><i class="fa-solid fa-location-dot"></i> </div><div className="contact-c-loca">Bhootkhel, Tokha, Nepal 44600</div></div>
                            <div className="contact-c-phone d-flex"> <div className="contact-c-pho-icon"><i class="fa-solid fa-phone"></i></div> <div className="contact-c-pho">+977 9812345678</div></div>
                            <div className="contact-c-mail d-flex"><div className="contact-c-ma-icon"><i class="fa-solid fa-envelope"></i></div> <div className="contact-c-ma"> admin@smartdoors.com.np</div></div>
                        </div>
                    </div>
                    <div className="col-xsm-12 col-sm-6 contact-form">
                        <div className="contact-form-head"> quick contact</div>
                        <form action="#">
                            <div>
                            <label for="name" className="contact-form-label">your name <span className="contact-form-req">(Required)</span></label> <br />
                            <input type="text" className="contact-input" id="fname" name="fname" placeholder="Enter your name"/>
                            </div>
                            <div>
                            <label for="email" className="contact-form-label">your email <span className="contact-form-req">(Required)</span></label> <br />
                            <input type="email" className="contact-input" id="fname" name="fname" placeholder="Enter your email"/>
                            </div>
                            <div>
                            <label for="number" className="contact-form-label">your phone  number <span className="contact-form-req">(Required)</span></label> <br />
                            <input type="number" className="contact-input" id="fname" name="fname" placeholder="Enter your phone number"/>
                            </div>
                           <div>
                           <label for="message" className="contact-form-label">your message <span className="contact-form-req">(Optional)</span></label> <br />
                            <textarea name="message" className="message-textarea"  placeholder="Message..."></textarea>
                           </div>

                           <div className="contact-submit-btn">
                            <span className="btn btn-submit">submit</span>
                           </div>
                        </form>
                    </div>
                </div>
                
                <div id="sub">

                <div className="row row-subscribe">
                    <div className="col-12">
                        <div className="sub-title text-uppercase">
                            Sign up for our <div className="sub-news">newsletter</div>
                        </div>
                    </div>
                    <div className="col-10 mx-auto">
                        <div className="sub-input order-1"><input type="email" placeholder="Enter your Email ID" requried/> <div className="sub-btn btn text-uppercase order-3">Subscribe</div></div>
                        <div className="sub-check order-2"><div className="sub-checkbox"><input type="checkbox" id="checkboxsub"className="checkbox" /></div>
                            <label htmlFor="checkboxsub" className='sub-check-title'>I consent to LABELUK collecting my details through this form.</label>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Contact;
//import css
import '../style/Contact.css';

function Contact (){
    return(
        <div>
        <div className="contact">
        <div className="contact-img-wrapper d-flex align-items-center justify-content-center">
            <div className="row contact-row  ">
                <div className="col-12 contact-img d-flex align-items-center justify-content-center">
                    <div>
                    <div className="contact-title text-capitalize text-center">Contact us</div>
                    <div className="contact-para text-center">For more do visit our Location</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row map-row">
            <div className="col-sm-6 ">
                <div className="form-title text-capitalize">Fill Up form</div>
                <form action="#">
                <label class="form-label text-capitalize">Name</label>
                <input class="form-input" type="text" placeholder="Enter your name"/>

                <label class="form-label text-capitalize">Email</label>
                <input class="form-input" type="email" placeholder="Enter your name"/>

                <label class="form-label text-capitalize">Phone Number</label>
                <input class="form-input" type="number" placeholder="Enter your name"/>

                <label class="form-label text-capitalize">Subject</label>
                <input class="form-input" type="text" placeholder="Enter your name"/>

                <label class="form-label text-capitalize">message</label>
                <textarea class="contact-textarea" placeholder="enter your meassage here"></textarea>


                </form>
                <div className="contact-btn btn">Submit</div>
            </div>
            <div className="col-sm-6 contact-grid">
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14122.507052387238!2d85.3267929!3d27.7596559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1fe0ae5e987d%3A0x1ede3e5742df2552!2sSmart%20Doors!5e0!3m2!1sen!2snp!4v1678623381999!5m2!1sen!2snp" className="map-iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                <div className="contact-icon-container ">
                    <div className=" d-flex align-items-center justify-content-start">
                    <div className="contact-location-icon"><i class="fa-solid fa-location-dot"></i> </div>
                    <div className="contact-location text-capitalize">Bhootkhel-3 Tokha, kathmandu</div>   
                    </div>
                    <div className=" d-flex align-items-center justify-content-start">
                    <div className="contact-phone-icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="contact-phone">+977 9802036938</div>
                    
                    </div>
                    <div className=" d-flex align-items-center justify-content-start">
                    <div className="contact-mail-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="contact-mail">smartdoorsnepal@gmail.com</div>
                    </div>

                    <div className="contact-social  d-flex align-items-center justify-content-evenly">
                    <div className="contact-fb"><i class="fa-brands fa-facebook"></i></div>
                    <div className="contact-insta"><i class="fa-brands fa-instagram"></i></div>
                    <div className="contact-whatsapp"><i class="fa-brands fa-whatsapp"></i></div>
                    </div>
                </div>
                </div>

            </div>
        </div>
        </div>
        </div>

    )
}
export default Contact;
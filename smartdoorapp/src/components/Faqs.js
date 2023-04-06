import '../style/faqs.css'
//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';

//animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Faqs(){
    useEffect(()=>{
        AOS.init()
    })
    return(
        <div>
            <Navbar></Navbar>
            <div id="faq-how">
                <div className="row row-fa">
                    <div className="fa-center d-flex justify-content-center flex-column">
                        <div className="fa-how fa-ques-head text-center" data-aos="fade-down">How can we help ?</div>
                        <div className="fa-how-input text-center"  data-aos="fade-right"><input type="text" placeholder="Search Frequently asked question" />  <div className="fa-how-btn btn"><i class="fa-solid fa-magnifying-glass"></i></div></div>
                    </div>
                </div>
            </div>
            <div id="faq-ques">
                <div className="row row-ques">
                    <div className="fa-ques-head text-capitalize text-center">popular questions</div>
                </div>
                <div className="row row-ques-list">
                    <div>
                        <div className="fa-question-head">How long have you operate?</div>
                        <div className="fa-question-ans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum magnam eius vero voluptatum vitae, inventore nihil quod a est odio corporis officiis omnis?</div>
                    </div>

                    <div>
                        <div className="fa-question-head">How long have you operate?</div>
                        <div className="fa-question-ans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum magnam eius vero voluptatum vitae, inventore nihil quod a est odio corporis officiis omnis?</div>
                    </div>

                    <div>
                        <div className="fa-question-head">How long have you operate?</div>
                        <div className="fa-question-ans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum magnam eius vero voluptatum vitae, inventore nihil quod a est odio corporis officiis omnis?</div>
                    </div>

                </div>


                <div className="row row-learn">
                    <div className="learn-title text-capitalize  text-center fa-ques-head"> learn more</div>
                    <div className="learn-box">
                        <div className="learn-btn btn text-capitalize">memberships</div>
                        <div className="learn-btn btn text-capitalize">one-time orders</div>
                        <div className="learn-btn btn text-capitalize">exchanger offer</div>
                        <div className="learn-btn l-empty"></div>
                        <div className="learn-btn btn text-capitalize">shipping</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Faqs;
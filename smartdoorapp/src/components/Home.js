
//home css
import '../style/Home.css';
import service1 from '../image/services/service1.jpg';
import service2 from '../image/services/service2.jpg';
import service3 from '../image/services/service3.jpg';
import service4 from '../image/services/service4.jpg';
import service5 from '../image/services/service5.jpg';
import service6 from '../image/services/service6.jpg';
function Home(){
    const serviceCard=[
        {title:"Door accessories",image:service1,detail:"clean and custom"},
        {title:"Door Replacement",image:service2,detail:"clean and custom"},
        {title:"Customization",image:service3,detail:"clean and custom"},
        {title:"Installation",image:service4,detail:"clean and custom"},
        {title:"Door Design",image:service5,detail:"clean and custom"},
        {title:"Consulting",image:service6,detail:"clean and custom"},
    ]
    return(
    <div>
        <div className="home-carousel">
            <div id="homecarousel" class="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="home-carousel-item carousel-item active"> 
                        <div className="row home-item-row">
                            <div className="col-sm-8 mx-auto mt-sm-2">
                                <div className="home-carousel-detail d-flex align-items-start flex-column">
                                    <div className="home-carousel-head text-uppercase text-white m-2">
                                        welcome to smart doors
                                    </div>
                                    <div className="home-carousel-topic fs-2 text-uppercase text-start text-white fw-bolder">The Futuristic Smart Doors</div>
                                    <div className="home-carousel-para text-capitalize text-white text-start my-2">The advancement of technology has significantly impacted our daily lives, and it has made many tasks easier and more efficient. One such technological advancement is the futuristic smart doors. These...</div>
                                    <div className="carousel-btn d-flex">
                                        <div className="btn btn-explore px-4">explore now</div>
                                        <div className="btn btn-find px-4">find us</div>
                                    </div>
                                </div>
                            </div>                
                        </div>        
                    </div>
                    <div className="home-carousel-item carousel-item">
                        <div className="row home-item-row">
                        <div className="col-md-8 col-sm-12 mx-auto">
                                <div className="home-carousel-detail d-flex align-items-start flex-column">
                                    <div className="home-carousel-head text-uppercase text-white m-2">
                                        welcome to smart doors
                                    </div>
                                    <div className="home-carousel-topic fs-2 text-start text-uppercase text-white fw-bolder">Traditional doors vs. Smart Doors</div>
                                    <div className=" home-carousel-para  text-capitalize text-white text-start my-2">Doors are a fundamental component of any building, providing a means of access and security for its occupants. Over the years, doors have evolved from simple wooden barriers to more...</div>
                                    <div className="carousel-btn">
                                        <div className="btn btn-explore px-4">explore now</div>
                                        <div className="btn btn-find px-4">find us</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="home-carousel-item carousel-item">
                        <div className="row home-item-row">
                            <div className="col-sm-8 mx-auto mt-sm-2">
                                <div className="home-carousel-detail d-flex align-items-start flex-column">
                                    <div className="home-carousel-head text-uppercase text-white m-2">
                                        welcome to smart doors
                                    </div>
                                    <div className="home-carousel-topic fs-2 text-uppercase text-start text-white fw-bolder">The Futuristic Smart Doors</div>
                                    <div className="home-carousel-para text-capitalize text-white text-start my-2">The advancement of technology has significantly impacted our daily lives, and it has made many tasks easier and more efficient. One such technological advancement is the futuristic smart doors. These...</div>
                                    <div className="carousel-btn d-flex">
                                        <div className="btn btn-explore px-4">explore now</div>
                                        <div className="btn btn-find px-4">find us</div>
                                    </div>
                                </div>
                            </div>                
                        </div>   
                    </div>
                    <div className="home-carousel-item carousel-item">
                    <div className="row home-item-row">
                        <div className="col-md-8 col-sm-12 mx-auto">
                                <div className="home-carousel-detail d-flex align-items-start flex-column">
                                    <div className="home-carousel-head text-uppercase text-white m-2">
                                        welcome to smart doors
                                    </div>
                                    <div className="home-carousel-topic fs-2 text-uppercase text-start text-white fw-bolder">Traditional doors vs. Smart Doors</div>
                                    <div className=" home-carousel-para  text-capitalize text-white text-start my-2">Doors are a fundamental component of any building, providing a means of access and security for its occupants. Over the years, doors have evolved from simple wooden barriers to more...</div>
                                    <div className="carousel-btn">
                                        <div className="btn btn-explore px-4">explore now</div>
                                        <div className="btn btn-find px-4">find us</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homecarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon homecarousel-prev-btn" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homecarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="row trendy">
            <div className="col-md-6 col-sm-12">
                <div className="trendy-detail">
                    <div className="trendy-head">
                    A Trendy Doors For Trendy Home
                    </div>
                    <div className="trendy-para">
                    Smart Doors is an emerging door production Company located in Tokha -3 road kathmandu. We provide our consumers with products of the highest caliber and with top rated customer service. We have been dedicated to giving our clients super excellent...
                    <br />
                    This company focus has been in place for more than a half century. We are committed to providing our customers with exceptional service while offering our employees the best training best of all and a working environment.
                    </div>
                    <div className="trendy-btn text-uppercase">Learn More</div>
                </div>
            </div>
            <div className="col-md-6 trendy-img .d-sm-none .d-md-block" ></div>
        </div>

        <div className="service">
            <div className="row service-row">
                <div className="service-head text-capitalize">
                    Services
                </div>
            </div>
            <div className="row service-grid">
              {serviceCard.map((e)=>{
                  return <div className="service-card">
                        <div className="service-card-img" style={{background: `url(${e.image})`}}></div>
                        <div className="service-card-detail">
                            <div className="service-card-title">{e.title}</div>
                            <div className="service-card-p">{e.detail}</div>
                        </div>
                        </div>
              })}
            </div>
        </div>
        <div className="premium">
           <div className="row row-premium">
            <div className="col-sm-12">
            <div className="premium-head">Upgrade Your Home Security with Our Expert Door Services</div>
            <div className="premium-detail">If you're in need of new doors for your home or business, or if your current doors need repair or maintenance, don't hesitate to give us a call. Our team of experienced professionals will work with you to find the perfect doors for your needs and budget. Contact us today to schedule your consultation and get started on improving the security and appearance of your property.</div>
            <div className="premium-btn btn text-uppercase">find more</div>
            </div>
           </div>
        </div>
        <div className="topsales">
            <div className="row row-topsales">
                <div className="col-md-3">
                    <div className="topsales-title">Recon Veneer</div>
                    <div className="topsales-btn btn">click for more</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
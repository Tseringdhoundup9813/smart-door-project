
//home css
import '../style/Home.css';

function Home(){
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
                <div className="service-card">
                    <div className="service-card-img"></div>
                    <div className="service-card-detail">
                        <div className="service-card-title">Doors accessories</div>
                        <div className="service-card-p">custom and clean</div>
                        <div className="service-card-icon"><i class="fa-solid fa-chevron-right service-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
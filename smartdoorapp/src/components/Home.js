
//home css
import '../style/Home.css';
import { NavLink } from 'react-router-dom';

//service card- images
import service1 from '../image/services/service1.jpg';
import service2 from '../image/services/service2.jpg';
import service3 from '../image/services/service3.jpg';
import service4 from '../image/services/service4.jpg';
import service5 from '../image/services/service5.jpg';
import service6 from '../image/services/service6.jpg';

//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';

//products images
import productimg from '../image/products/3d/SD110.jpeg';
import productimgcan from '../image/products/canadian/CD101.jpg';
import productimgdouble from '../image/products/double/DDGK.jpg';
import productimgmembrane from '../image/products/membrane/SD11.jpeg';

//animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Home(){
    useEffect(()=>{
        AOS.init()
    })
    const top=()=>{
        window.scrollTo(0,0)
    }
    const serviceCard=[
        {title:"Door accessories",image:service1,detail:"clean and custom"},
        {title:"Door Replacement",image:service2,detail:"clean and custom"},
        {title:"Customization",image:service3,detail:"clean and custom"},
        {title:"Installation",image:service4,detail:"clean and custom"},
        {title:"Door Design",image:service5,detail:"clean and custom"},
        {title:"Consulting",image:service6,detail:"clean and custom"},
    ]
    const product=[
        {image:productimg, cat:"3D"},
        {image:productimgcan, cat:"canadian"},
        {image:productimgdouble, cat:" double"},
        {image:productimgmembrane, cat:"membrane"},
    ]
    return(
    <div>
        <Navbar></Navbar>
        <div className="home-carousel">
            <div id="homecarousel" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#homecarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner"  >
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
                                        <div><NavLink to="/product" className="nav-link btn-explore px-4">explore now</NavLink></div>
                                        <div><NavLink to="/contact" className="nav-link btn-find px-4">find us</NavLink></div>
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
                                    <div className="carousel-btn d-flex">
                                        <div><NavLink to="/product" className="nav-link btn-explore px-4">explore now</NavLink></div>
                                        <div><NavLink to="/contact" className="nav-link btn-find px-4">find us</NavLink></div>
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
                                        <div><NavLink to="/product" className="nav-link btn-explore px-4">explore now</NavLink></div>
                                        <div><NavLink to="/contact" className="nav-link btn-find px-4">find us</NavLink></div>
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
                                    <div className="carousel-btn d-flex">
                                        <div><NavLink to="/product" className="nav-link btn-explore px-4">explore now</NavLink></div>
                                        <div><NavLink to="/contact" className="nav-link btn-find px-4">find us</NavLink></div>
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
        <div className="row trendy " >
            <div className="col-md-6 col-sm-12" > 
                <div className="trendy-detail">
                    <div className="trendy-head">
                    A Trendy Doors For Trendy Home
                    </div>
                    <div className="trendy-para">
                    Smart Doors is an emerging door production Company located in Tokha -3 road kathmandu. We provide our consumers with products of the highest caliber and with top rated customer service. We have been dedicated to giving our clients super excellent...
                    <br />
                    This company focus has been in place for more than a half century. We are committed to providing our customers with exceptional service while offering our employees the best training best of all and a working environment.
                    </div>
                    <div className="text-uppercase"><NavLink to="/contact" className='nav-link trendy-btn '  >Learn More</NavLink></div>
                </div>
            </div>
            <div className="col-md-6 trendy-img .d-sm-none .d-md-block" data-aos="fade-left" ></div>
        </div>

        <div className="service">
            <div className="row service-row">
                <div className="service-head text-capitalize">
                    Services
                </div>
            </div>
            <div className="row service-grid" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
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
            <div className="premium-detail" data-aos="fade-right">If you're in need of new doors for your home or business, or if your current doors need repair or maintenance, don't hesitate to give us a call. Our team of experienced professionals will work with you to find the perfect doors for your needs and budget. Contact us today to schedule your consultation and get started on improving the security and appearance of your property.</div>
            <NavLink to="/contact"><div className="premium-btn btn text-uppercase">find more</div></NavLink>
            </div>
           </div>
        </div>
        <div className="product">
              <div className="row product-row">
                <div className="product-head text-capitalize">
                    Top sales
                </div>
              </div>
              <div className="row product-grid">
                {product.map((e)=>{
                return <div className="product-card" data-aos="flip-up">
                            <div className="product-img"  style={{background: `url(${e.image})center/contain no-repeat`}}>
                                <div className="product-detail">
                                    <div className="product-name">premium {e.cat} Door</div>
                                    <div className="product-model">sd102</div>
                                    <div className="product-btn btn">click here</div>
                                </div>
                            </div>
                            <div className="product-cat text-capitalize"><span className="premium-red">premium </span> {e.cat} <span className="premium-doors"> doors <span className="prem-do"></span></span> </div>
                        </div>
                    })
                }
              </div>
        </div>
        <div className="us">
            <div className="row us-row">
                <div className="col-sm-12 us-detail" >
                    <div className="us-title text-capitalize">why choose us</div>
                    <div className="us-para">We use the best Teak, Sissau and Chaap wood for our entire range of products and treatments. Each parts of doors pass through proper check before final selection. Durability, Strength and Attractiveness are our top most priority.</div>
                </div>
            </div>
            <div className="row row-card-us" >
            <div className="col-sm-4 us-card" >
                    <div className="us-icon"><i class="fa-solid fa-rocket"></i></div>
                    <div className="us-card-title">200+ Distributer</div>
                </div>
                <div className="col-sm-4 us-card">
                    <div className="us-icon"><i class="fa-solid fa-users"></i></div>
                    <div className="us-card-title">10000+ Customer</div>
                </div>
                <div className="col-sm-4 us-card">
                    
                    <div className="us-icon"><i class="fa-solid fa-users"></i></div>
                    <div className="us-card-title">10000+ Sales</div>
                </div>
            </div>
        </div>
        <div className="testomial">
             <div className="row testomial-row" >
                <div className="testomial-head text-capitalize">
                    clients
                </div>
              </div>
            <div id="testomial" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000" >
                        <div className="row row-carousel-item">
                            <div className="col-md-4  col-sm-12 testomial-img"></div>
                            <div className="col-md-8 col-sm-12 testomial-detail">
                                <div className="testo-quote-left"><i class="fa-solid fa-quote-left"></i></div>
                                <div className="testomial-title">
                                    <div className="testo-name">ram babu gurung</div>
                                    <div className="testo-position"> - businessman</div>
                                </div>
                                <div className="testo-head">amazing customer service</div>
                                <div className="testo-para">
                                    
                                We have purchased this for our office space and are extremely thankful for an entire team for their patience and information provided for our purchase related decisions. Material hardness can be ensured on the spot and every doors are perfectly...
                                <div className="testo-quote-right"><i class="fa-solid fa-quote-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item"  data-bs-interval="2000" >
                        <div className="row row-carousel-item">
                                <div className="col-md-4  col-sm-12 testomial-img"></div>
                                <div className="col-md-8 col-sm-12 testomial-detail">
                                    <div className="testo-quote-left"><i class="fa-solid fa-quote-left"></i></div>
                                    <div className="testomial-title">
                                        <div className="testo-name">ram babu gurung</div>
                                        <div className="testo-position"> - businessman</div>
                                    </div>
                                    <div className="testo-head">amazing customer service</div>
                                    <div className="testo-para">
                                        
                                    We have purchased this for our office space and are extremely thankful for an entire team for their patience and information provided for our purchase related decisions. Material hardness can be ensured on the spot and every doors are perfectly...
                                    <div className="testo-quote-right"><i class="fa-solid fa-quote-right"></i></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row row-carousel-item">
                                <div className="col-md-4  col-sm-12 testomial-img"></div>
                                <div className="col-md-8 col-sm-12 testomial-detail">
                                    <div className="testo-quote-left"><i class="fa-solid fa-quote-left"></i></div>
                                    <div className="testomial-title">
                                        <div className="testo-name">ram babu gurung</div>
                                        <div className="testo-position"> - businessman</div>
                                    </div>
                                    <div className="testo-head">amazing customer service</div>
                                    <div className="testo-para">
                                        
                                    We have purchased this for our office space and are extremely thankful for an entire team for their patience and information provided for our purchase related decisions. Material hardness can be ensured on the spot and every doors are perfectly...
                                    <div className="testo-quote-right"><i class="fa-solid fa-quote-right"></i></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#testomial" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon fa-solid fa-chevron-left testo-prev" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#testomial" data-bs-slide="next">
                    <span class="carousel-control-next-icon fa-solid fa-chevron-right testo-prev" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="yourdesign">
            <div className="row yourdesign-row" >
                <div className="col-12 col-sm-9 d-flex align-items-center justify-content-center flex-column">
                    <div className="yourdesign-title text-capitalize">
                    Got an Incredible Door Design Or Idea Right Now?
                    </div>
                    <div className="yourdesign-para text-start">
                    Objectively innovate empowered factory products else best platforms.
                    </div>
                </div>
                <div className="col-12 my-sm-0 my-3 col-sm-3 d-flex align-items-center justify-content-center">
                    <div className="yourdesign-btn btn text-uppercase" data-aos="fade-left"><NavLink to="contact" className="nav-link"> contact us</NavLink> </div>
                </div>
            </div>
        </div>
     <div  onClick={top} className="btn top-btn"><i class="fa-solid fa-arrow-up"></i></div>
        <Footer></Footer>
    </div>
    )
}

export default Home;
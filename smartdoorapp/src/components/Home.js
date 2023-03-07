import './Home.css';

// For home carousel images\
import home1 from '../image/home-img/home4.jpg'
import home2 from '../image/home-img/home1.jpg'
import home3 from '../image/home-img/home2.jpg'
import home4 from '../image/home-img/home3.jpg'
function Home(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={home1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={home2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={home3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={home4} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Home;
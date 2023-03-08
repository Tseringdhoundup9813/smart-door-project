import React,{useState} from 'react'
import "../CssComponent/doorslidersystem.css"

export default function() {
  const[wallColor,setWallColor]=useState("tomato");
  function wallColorFunction(color){
      setWallColor(color);
  }
  return (
    <div>
        <div className="doorslider-container">
            <div className="wall-texture" style={{backgroundImage:"url(./Image/wall-texture.jpg)"}}>
              <div className="wall-container" style={{backgroundColor:`${wallColor}`}} >

                {/* door container=========================== */}
                  <div className="door">
                    <div className="door-outerline">
                        <div className="door-outline-child">
                        <div id="carouselExampleIndicators" class="carousel slide">
                              <div class="carousel-indicators">
                                {/* bosstrap */}
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div class="carousel">
                                <div class="carousel-item active" style={{backgroundImage:"url(./Image/door2.png)"}}>
                                  
                                </div>
                                <div class="carousel-item" style={{backgroundImage:"url(./Image/door2.png)"}}>
                                  <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                  <img src="..." class="d-block w-100" alt="..."/>
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
       
                        </div>
                  </div>
                  </div>
              {/* ===================================== */}
              </div>

              {/* window container ============== */}
              <div className="window1"style={{backgroundImage:"url(./Image/window.png)"}} ></div>
              <div className="window2"style={{backgroundImage:"url(./Image/window.png)"}} ></div>

              {/*floor section ================================== */}

              <div className="floor">
                  <div className="flower1"  style={{backgroundImage:"url(./Image/flower1.png)"}}></div>
                  <div className="flower2"  style={{backgroundImage:"url(./Image/flower1.png)"}}></div>
                  <div className="flower3"  style={{backgroundImage:"url(./Image/flower3.png)"}}></div>
              </div>
              {/* ============================================= */}

              {/* wallcolor system============================== */}
              <div className="wallcolor-container">
                <ul>
                  <li  onClick={()=>wallColorFunction("tomato")}></li>
                  <li onClick={()=>wallColorFunction("lightblue")}></li>
                  <li onClick={()=>wallColorFunction("pink")}></li>
                  <li onClick={()=>wallColorFunction("orange")}></li>
                  <li onClick={()=>wallColorFunction("purple")}></li>
                </ul>
              </div>
              {/* ================================== */}
          </div>
          
        </div>
    </div>
  )
}

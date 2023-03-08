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
                          <div className="doorImage" style={{backgroundImage:"url(./Image/door.png)"}} >
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

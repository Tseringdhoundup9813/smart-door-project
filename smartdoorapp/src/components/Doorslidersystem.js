import React,{useState,useEffect} from 'react'
import "../CssComponent/doorslidersystem.css"

export default function() {
  const[wallColor,setWallColor]=useState("tomato");
  const[doorfilteritem,setdoorfilteritem] = useState([]);
  const[doorphoto,setdoorphoto]=useState("./Image/door2.png");

  const[doorCategoryList,setDoorCategoryList]=useState(["3d DOORS","DOUBLE DOORS","CANADA DOORS","MEMBRANE DOORS"])
  const[doorItem,setDoorItem] = useState([
    {
      image:"./Image/door2.png",
      category:"3d DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"DOUBLE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"DOUBLE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"DOUBLE DOORS",
    },
    {
      image:"./Image/door4.png",
      category:"DOUBLE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"DOUBLE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"CANADA DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"CANADA DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"CANADA DOORS",
    },
    {
      image:"./Image/door2.png",
      category:"CANADA DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"CANADA DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"MEMBRANE DOORS",
    },
    {
      image:"./Image/door4.png",
      category:"3d DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"MEMBRANE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"MEMBRANE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"MEMBRANE DOORS",
    },
    {
      image:"./Image/door5.png",
      category:"MEMBRANE DOORS",
    },
    {
      image:"./Image/door4.png",
      category:"MEMBRANE DOORS",
    },
    {
      image:"./Image/door2.png",
      category:"3d DOORS",
    },
    {
      image:"./Image/door2.png",
      category:"3d DOORS",
    },
    {
      image:"./Image/door2.png",
      category:"3d DOORS",
    },
    {
      image:"./Image/door2.png",
      category:"3d DOORS",
    },
    {
      image:"./Image/door2.png",
      category:"3d DOORS",
    },


  ])

  

  // door image array

 function DoorImageSelection(key,img){  

    let doorImage = document.querySelectorAll(".door-item");
    doorImage.forEach((item,index)=>{
        if(index != key){
          item.classList.remove("doorImageSelectionStyle");
        }
    })
    doorImage[key].classList.add("doorImageSelectionStyle");
   
    // add image selection to door div
    setdoorphoto(img.image);

    
 }




  // wall color system 


  function wallColorFunction(color){
      setWallColor(color);
  }

  // end ==================================

  // door category selection ================================================
  function DoorCategorySelection(category,key){
   
    let doorcategory =document.querySelectorAll(".door-category-item");
    
    doorcategory.forEach((item,index)=>{
      if(index != key){
        item.classList.remove("doorcategoryselection");
      }
    })
   
    doorcategory[key].classList.add("doorcategoryselection");

  // door cateogry filter system
    
    const doorcategoryfilter = doorItem.filter((item)=>{
        return item.category==category;
    })
    setdoorfilteritem(doorcategoryfilter);
    // console.log(doorcategoryfilter);
   

  }

  // 

  useEffect(()=>{
    // door category first div background set when relaod
    let doorcategory =document.querySelectorAll(".door-category-item");
    doorcategory[0].classList.add("doorcategoryselection");
    //  


    // door filter 
    const doorcategoryfilter = doorItem.filter((item)=>{
      return item.category==="3d DOORS"
    
  })
  setdoorfilteritem(doorcategoryfilter);

 
    

  },[])



  return (

    <div>
        <div className="doorslider-container">
           
              <div className="wall-container" style={{backgroundColor:`${wallColor}`}} >
                <div className="wall-texture"style={{backgroundImage:"url(./Image/wall-texture.jpg)"}} >

                </div>

                {/* door container=========================== */}



                  <div className="door">
                      <div className="doorImage" style={{backgroundImage:`url(${doorphoto})`,borderImage:"url(./Image/doorBorder2.png) 20 round"}}>
                      <div className="door-lock" style={{backgroundImage:"url(./Image/door-lock.png)"}}>
                        
                    </div>
                  </div>
                  </div>


              {/* ===================================== */}
              </div>

              {/* window container ============== */}
           
              <div className="window2"style={{backgroundImage:"url(./Image/window2.png)"}} ></div>
              <div className="window1"style={{backgroundImage:"url(./Image/window2.png)"}} ></div>


              {/*floor section ================================== */}

              <div className="floor">
                  {/* <div className="flower1"  style={{backgroundImage:"url(./Image/flower1.png)"}}></div> */}
                  <div className="flower2"  style={{backgroundImage:"url(./Image/chair.png)"}}></div>
           
                  <div className="flower4"  style={{backgroundImage:"url(./Image/flower6.png)"}}></div>

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
              </div>e
              {/* ================================== */}




              {/* ========================================= */}
              <div className="door-category-list">
                {
                  doorCategoryList.map((category,key)=>{
                    return  <li className="door-category-item" key={key} onClick={()=>DoorCategorySelection(category,key)}>{category}</li>

                  })
                }
                </div>





                {/* ====================================== */}
              {/* door category choose system *==========================*/}
              <div className="doorcategoryselectionsystem">
                <div className="doorcategorycarousel">
                  {
                    doorfilteritem.map((img,key)=>{
                      
                      return <div  key={key} className="door-item" onClick={()=>DoorImageSelection(key,img)}>
                        <div onClick={()=>setdoorphoto(img)}style={{backgroundImage:`url(${img.image})`}}></div>
                      </div>
                    })
                  }
               
                </div>
              </div>
              {/* ========================================================== */}
          </div>
          
        </div>

  )
}

//CSS
import '../style/Product.css';
import {Link} from "react-router-dom";



import React,{useState,useEffect} from 'react'
import axios from "axios"
function Product (){
//product get all from Server =================================================
const[allproduct,setallproduct] =useState([]);

// pagination varaible 
const[pageCount,setpageCount] =useState(1);
const[totalProductCount,setTotalProductCount]=useState(1);
const[totalProductShow,setTotalProductShow] = useState();


// category filter 
const[filtercategory,setFiltercategory] = useState("all");
const[filterColor,setFilterColor] = useState("all");
const[filterSize,setFilterSize] = useState("all");
const[DeleteMessage,setDeleteMessage] =useState(false);

const[deleteConfirmBox,setdeleteConfirmBox] = useState(false);
const[deleteID,setDeleteID]=useState("");


async function getProduct(){
    try{
        let res = await axios.get(`http://localhost:3001/product?page=${pageCount}&limit=15&colors=${filterColor}&category=${filtercategory}&size=${filterSize}`)
            setallproduct(res.data.data);
            console.log(res.data.data);
            if(res.data.data <=0){
                setDeleteMessage(true);
            }
            else{
                setDeleteMessage(false);
            }
            
           
            const checkdecimal = Number.isInteger(res.data.productLenght/15);
         
            setTotalProductCount(Math.trunc(checkdecimal?res.data.productLenght/15:(res.data.productLenght/15) + 1));
            setTotalProductShow(res.data.productLenght);

    }catch(err){
        console.log(err);
    }
}




useEffect(()=>{

    getProduct();
    
    if(pageCount-1 > totalProductShow/15){
        setpageCount(1);
    }
    paginationSelection();

 },[pageCount,filtercategory,filterColor,filterSize,totalProductCount,deleteID]);


//  delete product ======================


    function deleteConfirmYes(){
        
        axios.delete(`http://localhost:3001/delete?id=${deleteID}`).
        then((res)=>{
            // setDeleteMessage(res.data.message);
            setTimeout(function(){
                setDeleteMessage("");
                setDeleteID("");
                setdeleteConfirmBox(false);

            },500)
        }).catch((err)=>{
            console.log(err);
        })

    }
    function DeleteConfirmBoxFunction(key){
        setdeleteConfirmBox(true);
        setDeleteID(key);

    }


    // pagination select system===========================

    

 function paginationSelection(){
    try{
     
        let paginationSelection = document.querySelectorAll(".pagination-selection");
     
        paginationSelection.forEach((item,index)=>{
            if(item.value === pageCount){
               item.style.background="black";
            }
            else{
               item.style.background="grey";

            }
        })


    }catch(err){
        console.log(err);
    }
    let pageLeft = document.querySelector(".pageLeft");
    let pageRight = document.querySelector(".pageRight");
    if(pageCount <=1){
        pageLeft.style.opacity="0.5";

    }
    else{
        pageLeft.style.opacity="1";
        
    }
    if(pageCount < totalProductCount){
        pageRight.style.opacity="1";
        console.log(pageCount);
    }
    else{
        pageRight.style.opacity="0.5";
    }

 }


// ==========================================

//  filter ============================================
//using use sate for toggle filter btn tos how dilter div
const [showf, setShowf] = useState(true);
const filter=()=>{
    setShowf(!showf)
    // const filterCon=document.querySelector('.filter-body-sm');
    

    // if(filterCon.style.display === "none"){
    // filterCon.style.display="block";
    // filterCon.style.transform="translate(0,0)";
    
    // }else if (filterCon.style.display="block"){
    //     filterCon.style.display = "none";
    // }

}


// clear all filter data

    function ClearFilterData(){
        setFilterColor("all");
        setFilterSize("all");
        setFiltercategory("all");
    }

// =======================================



// end of filter ===========================================================

// ===================================================
   
    return(

    <div>

        {/* delete message  */}
        {
            deleteConfirmBox?<div id="delete-confirm-box">
                <h1>Delete Confirm</h1>
                <div>
                    <button onClick={()=>setdeleteConfirmBox(false)}>No</button>
                    <button onClick={()=>deleteConfirmYes()}>Yes</button>

                </div>
            </div>:<div></div>

        }

    

        {/* product not  found */}

      

        {/* ======================= */}
    <div className="product-row row">
         {/* ============viewall======== */}
         <div className="col-sm-12 product-show">
            <div className="product-pagination d-flex justify-content-end" >




             


            </div>

           
            <div className="row show-sort">
                <div className="col show-sm-filter d-flex align-items-center justify-content-end">
                <div className="filter-sm-con" onClick={filter}>
                    <div className="filter-icon"><i class="fa-solid fa-sliders"></i></div>
                    <div className="sm-filter">filter </div>
                </div>
                <div className="sort-title">Sort</div> 
                <div className="sort-icon"><i class="fa-solid fa-chevron-down"></i></div>
            </div>
            </div>
        </div>
        {/* ============filter============= */}
        {
            showf ?
            <div className="col-sm-3 col-xm-12 product-filter  filter-md">
            <div className="d-flex align-items-end justify-content-between">
            <div className="product-filter-title">Filter</div>
            <div className="filter-clear" onClick={ClearFilterData}>Clear All</div>
            </div>

            <div className="filter-cat">
            <div className="filter-cat-head">Categories</div>
            <ul className="filter-cat-ul">
                <li><input type="radio" name="cat" value="3D DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> 3D Doors</li>
                <li><input type="radio" name="cat"  value="DOUBLE DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> Double Doors</li>
                <li><input type="radio"  name="cat" value="CANADA DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> Canadian Doors</li>
                <li><input type="radio"  name="cat" value="MEMBRANE DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> Membrance Doors</li>
            </ul>    
            </div>
            <div className="filter-col">
                <div className="filter-col-head">Color</div>
                <div className="filter-col d-flex">
                    <div className="color" value="rose wood" onClick={()=>setFilterColor("rose wood")}></div>
                    <div className="color"value="andrateak" onClick={()=>setFilterColor("andrateak")}></div>
                </div>
            </div>  
            <div className="filter-length">
                <div className="filter-length-head">Length</div>
                <div className="filter-con">
                    <div className="filter-size"><input type="radio" value="80-32" onClick={(e)=>setFilterSize(e.target.value)} name="size"/>80 * 32</div>
                    <div className="filter-size"><input type="radio" value= "80-26"onClick={(e)=>setFilterSize(e.target.value)}  name="size"/>80 * 26</div>
                    <div className="filter-size"><input type="radio"value ="75-26" onClick={(e)=>setFilterSize(e.target.value)}  name="size"/>75 * 26</div>
                    <div className="filter-size"><input type="radio" value="72-26"  onClick={(e)=>setFilterSize(e.target.value)}  name="size"/>72 * 26</div>
                    <div className="filter-size"><input type="radio" value="80-38"   onClick={(e)=>setFilterSize(e.target.value)} name="size"/>80 * 38</div>
                    <div className="filter-size"><input type="radio" value="DD80-19" onClick={(e)=>setFilterSize(e.target.value)}   name="size"/>DD80 * 19</div>
                    <div className="filter-size"><input type="radio" value="DD80-22" onClick={(e)=>setFilterSize(e.target.value)}  name="size"/>DD80 * 22</div>


                </div>
            </div>
            <div className="filter-btn-sm d-flex justify-content-around my-2">
                <div className="filter-search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        :<></>
        }
        
        {/* =================product-view============= */}
        <div className="col-sm-9 col-xm-12" id="product-view">
        <div className="show-product">
            <div className="show-card">

                    
                 {/* // product is not found ================================================= */}

                    {
                         DeleteMessage?<img src={"./Image/no-products.jpg"}></img>:""
                    }
                    
                {
                allproduct.map((product,key)=>{
                    console.log(product);
                     return <div key={key} className="show-card-container" > 
                       
                            <div className="show-card-img">
                          
                                <img src={product.img[0]}></img>
                                </div>
                            <Link to={`/product/${product._id}`} ></Link>


                              

                                
                          
                            <div className="show-card-detail">
                                  {/* delete product  */}
                                      {/* <li className="deleteproduct" onClick={()=>DeleteConfirmBoxFunction(product._id)}>delete</li> */}
                              {/* ========== */} 
                            
                            
                              <div className="show-card-title"><h1>{product.name}</h1></div>
                            
                                <div className="show-card-price"><h1>Rs { product.price}</h1></div> 
                                {/* <p>{product.categories}</p>  
                                <p>{product.colors}</p>   */}

                           
                            </div>
                            
                         </div>
                    })


                }

         

               


            </div>
                
            </div>
            
       
            

        </div>

    </div>
    </div>

    )
}
export default Product;
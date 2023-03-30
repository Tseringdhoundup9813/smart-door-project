//CSS
import '../style/Product.css';
import {NavLink} from "react-router-dom";

//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';

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
        let res = await axios.get(`http://localhost:3001/product?page=${pageCount}&limit=20&colors=${filterColor}&category=${filtercategory}&size=${filterSize}`)
            setallproduct(res.data.data);
       
            if(res.data.data <=0){
                setDeleteMessage(true);
            }
            else{
                setDeleteMessage(false);
            }
            
           
            const checkdecimal = Number.isInteger(res.data.productLenght/20);
         
            setTotalProductCount(Math.trunc(checkdecimal?res.data.productLenght/15:(res.data.productLenght/20) + 1));
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

        // clear filter 
        let category = document.querySelectorAll(".category");
        category.forEach((items)=>{
            items.checked = false;
        })

        // clear filter 
        let size = document.querySelectorAll(".size");
        size.forEach((sizes)=>{
            sizes.checked = false;
        })
    }

// =======================================



// end of filter ===========================================================
const [selected, setSelected]=useState('no');
const handlechange=()=>{
    setSelected('yes');
}
// =====================FOR CHECK BOX CLEAR========================
    return(

    <div>
        <Navbar></Navbar>
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




             

                 {/* pagination ======================================== */}
               <div id="pagination">
                <div className="row show-head ">
                   <div className="show-total">Total product (<span id="total-product-number" className=' text-primary'> {totalProductShow} </span>)</div>
                </div>
                <div className="pagination-btn d-flex" >
                <button className="pageLeft"onClick={()=>setpageCount((prev)=>prev <=1?1:--prev)}><i class="fa-solid fa-arrow-left"></i></button>
                    {
                        [...Array(totalProductCount)].map((e,i)=>{
                        return <li class="pagination-selection" key={i} onClick={(e)=>setpageCount(e.target.value)} value={i+1}>{i+1}</li>
                     })
                    }
                 <button className="pageRight" onClick={()=>setpageCount((prev)=>prev>=totalProductCount-1?totalProductCount:++prev)}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
                
            {/* end of pagination =================================== */}

            </div>

           
            <div className="row show-sort">

                <div className="col show-sm-filter d-flex align-items-center justify-content-end">
                <div className="filter-sm-con" onClick={filter}>
                    <div className="filter-icon"><i class="fa-solid fa-sliders"></i></div>
                    <div className="sm-filter">filter </div>
                </div>
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
                <li><input  className='category' type="radio" id="3D Doors" name="cat" onChange={handlechange} value="3D DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> <label htmlFor="3D Doors">3d Doors</label> </li>
                <li><input className='category' type="radio" id="dd" name="cat"  value="DOUBLE DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> <label htmlFor="dd">Double Doors</label></li>
                <li><input className='category'  type="radio"  id="cd" name="cat" value="CANADA DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> <label htmlFor="cd">Canadian Doors</label></li>
                <li><input className='category' type="radio" id="md" name="cat" value="MEMBRANE DOORS" onClick={(e)=>setFiltercategory(e.target.value)}/> <label htmlFor="md">Membrance Doors</label></li>
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
                    <div className="filter-size"><input type="radio" className="size" id="size1" value="80-32"   onClick={(e)=>setFilterSize(e.target.value)} name="size"/><label htmlFor='size1'> 80 * 32</label> </div>
                    <div className="filter-size"><input type="radio" className="size" id="size2" value= "80-26"  onClick={(e)=>setFilterSize(e.target.value)}  name="size"/><label htmlFor="size2">80 * 26</label></div>
                    <div className="filter-size"><input type="radio" className="size" id="size3" value ="75-26"  onClick={(e)=>setFilterSize(e.target.value)}  name="size"/><label htmlFor="size3">75 * 26</label></div>
                    <div className="filter-size"><input type="radio" className="size" id="size4" value="72-26"   onClick={(e)=>setFilterSize(e.target.value)}  name="size"/><label htmlFor="size4">72 * 26</label></div>
                    <div className="filter-size"><input type="radio" className="size" id="size5" value="80-38"   onClick={(e)=>setFilterSize(e.target.value)} name="size"/><label htmlFor="size5">80 * 38</label></div>
                    <div className="filter-size"><input type="radio" className="size" id="size6" value="DD80-19"  onClick={(e)=>setFilterSize(e.target.value)}   name="size"/><label htmlFor="size6">DD80 * 19</label></div>
                    <div className="filter-size"><input type="radio" className="size" id="size7" value="DD80-22"  onClick={(e)=>setFilterSize(e.target.value)}  name="size"/><label htmlFor="size7">DD80 * 22</label></div>


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
                        return <div key={key} className="show-card-container" > 
                            <NavLink to={`/product/page-view${product._id}`} >
                                <div className="show-card-img">
                                     <img src={product.img[0]}></img>
                                </div>
                                </NavLink>
                          


                              

                                
                          
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
    <Footer></Footer>
    </div>

    )
}
export default Product;
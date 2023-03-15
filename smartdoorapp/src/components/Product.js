//CSS
import '../style/Product.css';



import React,{useState,useEffect} from 'react'
import axios from "axios"
function Product (){
//product get all from Server =================================================
const[allproduct,setallproduct] =useState([]);

// pagination varaible 
const[pageCount,setpageCount] =useState(1);
const[totalProductCount,setTotalProductCount]=useState(0);


console.log(Math.trunc(totalProductCount));

useEffect(()=>{
    axios.get(`http://localhost:3001/product?page=${pageCount}&limit=9`).then((res)=>{
        setallproduct(res.data.data);
        setTotalProductCount(res.data.productLenght/9);
    }).catch((err)=>{
        console.log(err);
    })
 },[pageCount])


//  filter ============================================

const filter=()=>{
    const filterCon=document.querySelector('.filter-body-sm');
    

    if(filterCon.style.display === "none"){
    filterCon.style.display="block";
    filterCon.style.transform="translate(0,0)";
    
    }else if (filterCon.style.display="block"){
        filterCon.style.display = "none";
    }

}
// end of filter ===========================================================

// ===================================================
   
    return(
    <div>
    <div className="product-row row">
        <div className="col-sm-3 product-filter  filter-md">
            <div className="d-flex align-items-end justify-content-between">
            <div className="product-filter-title">Filter</div>
            <div className="filter-clear">Clear All</div>
            </div>

            <div className="filter-cat">
            <div className="filter-cat-head">Categories</div>
            <ul className="filter-cat-ul">
                <li><input type="radio" name="door" /> 3D Doors</li>
                <li><input type="radio" name="door"/> Double Doors</li>
                <li><input type="radio" name="door"/> Canadian Doors</li>
                <li><input type="radio" name="door"/> Membrance Doors</li>
            </ul>    
            </div>
            <div className="filter-col">
                <div className="filter-col-head">Color</div>
                <div className="filter-col d-flex">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                </div>
            </div>  
            <div className="filter-length">
                <div className="filter-length-head">Length</div>
                <div className="filter-con">
                    <div className="filter-size"><input type="radio"  name="size"/>  30mm</div>
                    <div className="filter-size"><input type="radio"  name="size"/>  60mm</div>
                </div>
            </div>

        </div>
        <div className="col-12 col-sm-9 product-show">
            <div className="product-pagination d-flex justify-content-end" >
            <div id="pagination">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                    
                    <li onClick={()=>setpageCount(1)}>1</li>
                    <li onClick={()=>setpageCount(2)}>2</li>
                    <li onClick={()=>setpageCount(3)}>3</li>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>
                


            </div>

            <div className="row show-head ">
                <div className="col d-flex align-items-center justify-content-center text-capitalize">View All ({allproduct.length})</div>
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
            <div className="col-sm-3 product-filter  filter-body-sm border border-primary">
            <div className="d-flex align-items-end justify-content-between">
            <div className="product-filter-title">Filter</div>
            <div className="filter-clear">Clear All</div>
            </div>

            <div className="filter-cat">
            <div className="filter-cat-head">Categories</div>
            <ul className="filter-cat-ul">
                <li><input type="radio" name="door" /> 3D Doors</li>
                <li><input type="radio" name="door"/> Double Doors</li>
                <li><input type="radio" name="door"/> Canadian Doors</li>
                <li><input type="radio" name="door"/> Membrance Doors</li>
            </ul>    
            </div>
            <div className="filter-col">
                <div className="filter-col-head">Color</div>
                <div className="filter-col d-flex">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                </div>
            </div>  
            <div className="filter-length filter-sm">
                <div className="filter-length-head">Length</div>
                <div className="filter-con">
                    <div className="filter-size"><input type="radio"  name="size"/>  30mm</div>
                    <div className="filter-size"><input type="radio"  name="size"/>  60mm</div>
                </div>
            </div>

            <div className="filter-btn-sm d-flex justify-content-around my-2">
                <div className="filter-close-btn" onClick={filter}>
                <i class="fa-solid fa-x"></i>
                </div>
                <div className="filter-search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            </div>
            <div className="show-product">
            <div className="show-card">
                {allproduct.map((product,key)=>{
                    return <div key={key} className="show-card-container">   
                    <div className="show-card-img" style={{ background: `url(${product.img})center/contain no-repeat`}}>
                    </div>
                    <div className="show-card-detail">
                        <div className="show-card-title">{product.name}</div>
                        <div className="show-card-price">{product.price}</div>   
                    </div>
                </div>
                })}
            </div>
            </div>
            

        </div>
    </div>
    </div>

    )
}
export default Product;
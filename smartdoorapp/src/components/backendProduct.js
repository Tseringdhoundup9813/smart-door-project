<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import axios from "axios"

function Product() {
    const[productupload,setproductupload] = useState({name:"",description:"",price:"",img:""});
    const[allproduct,setallproduct] =useState([]);


    

     const onSubmit =(e)=>{
   
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name",productupload.name)
        formdata.append("description",productupload.description)
        formdata.append("price",productupload.price)
        formdata.append("testImage",productupload.img);

        

        axios.post("http://localhost:3001/upload",formdata, {
        }).then(res => {
            console.log(res.data)
            
        }).catch((err)=>{
            console.log(err);
        })


     }
     useEffect(()=>{
        axios.get("http://localhost:3001/product").then((res)=>{
            setallproduct(res.data);
            
        }).catch((err)=>{
            console.log(err);
        })
     },[])
 
  return (
    <div>
        <div>
          {
            allproduct.map((item,key)=>{
                
                console.log(item.img);
                return <div key={key}>
                    <h1>{item.name}</h1>
                    <img src={item.img}></img>
                </div>
            })
          }
         </div>
       
       <form onSubmit={onSubmit}>
            <h3>React File Upload</h3>
            <div className="form-group">
                <input placeholder='name'onChange={(e)=>setproductupload({...productupload ,name:e.target.value})}></input>
                <input placeholder='description' onChange={(e)=>setproductupload({...productupload ,description:e.target.value})}></input>
                <input placeholder='price' onChange={(e)=>setproductupload({...productupload ,price:e.target.value})}></input>
        
                 <input type="file" name="testImage" onChange={(e)=>setproductupload({...productupload ,img:e.target.files[0]})} />
                 </div>
                <div className="form-group">
             <button className="btn btn-primary" type="submit">Upload</button>
            </div>
         </form>


         
    </div>

  )
}

export default Product
=======
//CSS
import '../style/Product.css';

//images
//3d doors
import product1 from '../image/products/3d/SD110.jpeg';
//canadian
import product2 from '../image/products/canadian/CD101.jpg';
import product3 from '../image/products/canadian/CD102.jpg';
import product4 from '../image/products/canadian/CD103.jpg';
import product5 from '../image/products/canadian/CD104.jpg';
//double door
import productdd from '../image/products/double/DDGK.jpg';
//membrance
import productm from '../image/products/membrane/SD11.jpeg';
import productm1 from '../image/products/membrane/SD101.jpg';
import productm2 from '../image/products/membrane/SD102.jpg';

//next page
import productm3 from '../image/products/membrane/SD103.jpg';
import productm4 from '../image/products/membrane/SD103.jpg';
import productm5 from '../image/products/membrane/SD106.jpg';
import productm6 from '../image/products/membrane/SD115.jpg';
function Product (){

    const productImgpage1=[
        {image:product1, name:"Balck door", price:"300"},
        {image:product2, name:"Balck door", price:"300"},
        {image:product3, name:"Balck door", price:"300"},
        {image:product4, name:"Balck door", price:"300"},
        {image:product5, name:"Balck door", price:"300"},

        {image:productdd, name:"Balck door", price:"300"},

        {image:productm, name:"Balck door", price:"300"},
        {image:productm1, name:"Balck door", price:"300"},
        {image:productm2, name:"Balck door", price:"300"}
    ]
    const productImag2=[        
        {image:productm3, name:"Balck door", price:"300"},
        {image:productm4, name:"Balck door", price:"300"},
        {image:productm5, name:"Balck door", price:"300"},
        {image:productm6, name:"Balck door", price:"300"},
    ]
    return(
    <div>
    <div className="product-row row">
        <div className="col-sm-3 product-filter border border-primary">
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
            <div id="pagination" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item pagination-number active">
                        1
                    </div>
                    <div class="carousel-item pagination-number">
                        2
                    </div>
                </div>
                <button class="carousel-control-prev pagination-btn" type="button" data-bs-target="#pagination" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next pagination-btn" type="button" data-bs-target="#pagination" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div className="row show-head ">
                <div className="col d-flex align-items-center justify-content-center text-capitalize">View All (1000)</div>
            </div>
            <div className="row show-sort">
                <div className="col d-flex align-items-center justify-content-end"><div className="sm-filter">filter <div className="filter-icon"><i class="fa-solid fa-sliders"></i></div></div><div className="sort-title">Sort by newest</div> <div className="sort-icon"><i class="fa-solid fa-chevron-down"></i></div></div>
            </div>
            <div className="show-card">
                {productImgpage1.map((e)=>{
                    return <div className="show-card-container">   
                    <div className="show-card-img" style={{ background: `url(${e.image})center/contain no-repeat`}}>
                    </div>
                    <div className="show-card-detail">
                        <div className="show-card-title">Brown red</div>
                        <div className="show-card-price">Rs. 3800/-</div>   
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
    </div>

    )
}
export default Product;
>>>>>>> b19fb1c22649d7c688406c626f038cc688a80e7a

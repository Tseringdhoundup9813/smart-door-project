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
    let count= 0;
    const pagebtnRight=()=>{
        let div =document.querySelectorAll('.pagenumber')
        let width=div[1].clientWidth;
        let carouselContainer=document.querySelector('.page-number-container')
        if(count>= div.length-1) return;
        carouselContainer.style.transition = 'transform .4s ease-in-out';
        (count++);
        carouselContainer.style.transform = 'translateX('+ (-width *count)  + 'px)';

        //for show product
        let productdiv =document.querySelectorAll('.show-product')
        let productwidth=productdiv[1].clientWidth;
        let productContainer=document.querySelector('.show-product-container')
        productContainer.style.transition = 'transform .4s ease-in-out';
        (count++);
        productContainer.style.transform = 'translateX('+ (-productwidth *count)  + 'px)';


    }
    const pagebtnLeft=()=>{
        let div =document.querySelectorAll('.pagenumber')
        let width=div[1].clientWidth;
        let carouselContainer=document.querySelector('.page-number-container')
        if(count <= 0)return;
        carouselContainer.style.transition = 'transform .4s ease-in-out';
        (count--);
        carouselContainer.style.transform = 'translateX('+ (-width * count)  + 'px)';

    }


    const filter=()=>{
        const filterCon=document.querySelector('.filter-body-sm');
        

        if(filterCon.style.display === "none"){
        filterCon.style.display="block";
        filterCon.style.transform="translate(0,0)";
        
        }else if (filterCon.style.display="block"){
            filterCon.style.display = "none";
        }

    }
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

         {/*button page*/}
            <div className="page-btn d-flex justify-content-end">
                <div className="page-btn-left" onClick={pagebtnLeft}><i class="fa-solid fa-angle-left"></i></div>
                <div className="page-number">
                    <div className="page-number-container">
                        <div className="pageone pagenumber" >1</div>
                        <div className="pagetwo pagenumber">2</div>
                    </div>
                </div>
                <div className="page-btn-right" onClick={pagebtnRight}><i class="fa-solid fa-angle-right"></i></div>
            </div>

            <div className="row show-head ">
                <div className="col d-flex align-items-center justify-content-center text-capitalize">View All (1000)</div>
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
    </div>

    )
}
export default Product;
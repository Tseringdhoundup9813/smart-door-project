import { NavLink } from "react-router-dom";
import React,{useState} from 'react'
import axios from "axios"

function UpdateProduct(){
    const[productupload,setproductupload] = useState({name:"",description:"",price:"",img:[],categories:"3D DOORS",color:"rose wood",size:"80-32"});

    // sucessfully updated
    const[message,setMessage] =useState(""); 
     const onSubmit =(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name",productupload.name)
        formdata.append("description",productupload.description)
        formdata.append("price",productupload.price)
        {
            for(var a=0;a< productupload.img.length;a++){
                formdata.append("testImage",productupload.img[a]);
            }
        }
        formdata.append("categories",productupload.categories);
        formdata.append("colors",productupload.color);
        formdata.append("size",productupload.size);
        axios.post("http://localhost:3001/upload",formdata, {
        }).then(res => {
            console.log(res.data)
            console.log(res.data.message);
            setMessage(res.data.message);
            
        }).catch((err)=>{
            console.log(err);
        })
     }
    return(
        <div>
            <form onSubmit={onSubmit}>
           <div className="row-uproduct row">
        <h1>{message}</h1>

            <div className="col d-flex align-items-center justify-content-between">
                <NavLink to='/admin/products'>
                <div className="up-back-btn btn">Go back</div>
                </NavLink>
                <div className="up-title">Update Product</div>
                <div >
           <button className="btn btn-primary" type="submit">Upload</button>

                </div>
            </div>
           </div>
           <div className="row w-90 mx-auto">
            <div className="col-7 up-input">
                    <div className="up-product-title">
                        <label className=" text-capitalize" >Product title</label>
                        <input className="mb-2 form-control" type="text" onChange={(e)=>setproductupload({...productupload ,name:e.target.value})} />
                    </div>
                    <div className="up-product-title">
                        <label className=" text-capitalize" >Price</label>
                        <input className="mb-2 form-control" type="number"  onChange={(e)=>setproductupload({...productupload ,price:e.target.value})} />
                    </div>
                    <div className="up-size">
                       <div className="up-size ">
                       <label className=" text-capitalize " >Size : </label>
                        <select className="form-control mb-2" defaultValue={"80-32"} onChange={(e)=>setproductupload({...productupload ,size:e.target.value})} name="" id="upSize">
                            <option value="size">80 * 32</option>
                            <option value="size">80 * 26</option>
                            <option value="size">75 * 26</option>
                            <option value="size">72 * 26</option>
                            <option value="size">72 * 26</option>
                            <option value="size">80 * 38</option>
                            <option value="size">DD80 * 19</option>
                            <option value="size">DD80 * 22</option>
                        </select>
                       </div>
                        <div className="up-cat">
                        <label className="text-capitalize " >Categories : </label>
                        <select  id="cars" defaultValue={"3D DOORS"} onChange={(e)=>setproductupload({...productupload ,categories:e.target.value})} className="form-control mb-2" name="" id="upCat">
                            <option value="categories">3d doors</option>
                            <option value="categories">Double  doors</option>
                            <option value="categories">Canadian  doors</option>
                            <option value="categories">Membrance  doors</option>
                        </select>
                        </div>
                    </div>
                    
                    <div className="up-product-title">
                        <label className=" text-capitalize" >color</label>
                        <input className="mb-2 form-control" type="text"  />
                    </div>
                    <div className="up-product-title">
                        <label className=" text-capitalize" >Discount</label>
                        <input className="mb-2 form-control" type="text"  />
                    </div>
                    <div className="up-product-title">
                        <label className=" text-capitalize" >description</label>
                        <textarea className="form-control" name="" id="" cols="30" rows="10"  onChange={(e)=>setproductupload({...productupload ,description:e.target.value})}>

                        </textarea>
                    </div>
            </div>
            <div className="col-5 up-img">
                <div className="front-img">
                    <div className="img"></div>
                    <div className="img-upload">
                        <input type="file" name="testImage" onChange={(e)=>setproductupload({...productupload,img:[...productupload.img,e.target.files[0]]})}/>
                    </div>
                </div>

                <div className="back-img">
                    <div className="img"></div>
                    <div className="img-upload">
                        <input type="file" name="testImage" onChange={(e)=>setproductupload({...productupload,img:[...productupload.img,e.target.files[0]]})}  />
                    </div>
                </div>
            </div>
           </div>

            </form>
        </div>
    )
}

export default UpdateProduct;
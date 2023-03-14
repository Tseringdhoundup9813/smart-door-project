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
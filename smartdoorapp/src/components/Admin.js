import React,{useState} from 'react'
import axios from "axios"

function Admin() {
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

  
 
  return (
    <div>
        <h1>{message}</h1>
      
       
       <form onSubmit={onSubmit}>
            <h3>React File Upload</h3>
            <div className="form-group">
                <input placeholder='name'onChange={(e)=>setproductupload({...productupload ,name:e.target.value})}></input>
                <input placeholder='description' onChange={(e)=>setproductupload({...productupload ,description:e.target.value})}></input>
                <input type="Number" placeholder='price' onChange={(e)=>setproductupload({...productupload ,price:e.target.value})}></input>


                
                {/* door categories = ======================= */}
                <select id="cars"  defaultValue={"3D DOORS"} onChange={(e)=>setproductupload({...productupload ,categories:e.target.value})}>
                    <option value="3D DOORS">3D DOORS</option>
                    <option value="DOUBLE DOORS">DOUBLE DOORS</option>
                    <option value="CANADA DOORS">CANADA DOORS</option>
                    <option value="MEMBRANE DOORS" >MEMBRANE DOORS</option>
                </select>
                
                {/* color ======================== */}
                <select id="cars"  defaultValue={"red"} onChange={(e)=>setproductupload({...productupload ,color:e.target.value})}>
                    <option value="rose wood">Rose Wood</option>
                    <option value="andrateak">Andrateak</option>
                 
                 
                </select>

                {/* size  */}
                <select id="cars"  defaultValue={"80-32"} onChange={(e)=>setproductupload({...productupload ,size:e.target.value})}>
                    <option value="80-32">80 * 32</option>
                    <option value="80-26">80 * 26</option>
                    <option value="75-26">75 * 26</option>
                    <option value="72-26">72 * 26</option>
                    <option value="80-38">80 * 38</option>
                    <option value="DD80-19">DD80 * 19</option>
                    <option value="DD80-22">DD 80 * 22</option>

                 
                </select>


                 <input type="file" name="testImage" onChange={(e)=>setproductupload({...productupload,img:[...productupload.img,e.target.files[0]]})} />
                 <input type="file" name="testImage" onChange={(e)=>setproductupload({...productupload,img:[...productupload.img,e.target.files[0]]})} />
         

                 </div>
                <div className="form-group">
             <button className="btn btn-primary" type="submit">Upload</button>
            </div>
         </form>


         
    </div>

  )
}

export default Admin;

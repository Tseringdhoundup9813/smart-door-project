import React,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AdminProtected(props) {
    const{Component} = props
    const navigate = useNavigate();
    // const location = useLocation();
    useEffect(()=>{
       // console.log(location.state.previousUrl)
       CheckAdmin();
       async function CheckAdmin(){
            try{
                const product = await axios.get(`http://localhost:3001/checkadmin/${localStorage.getItem("user_id")}/`)
               
                if(!product.data.admin){
                    navigate("/")
                    console.log("you not athoru")
                }
                
            }catch(err){
               console.log(err);
            }
       }
      
    })
  return (

    <Component></Component>
    
  )
}

export default AdminProtected
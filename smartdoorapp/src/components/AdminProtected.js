import React,{useEffect,useLocation,useNavigate}from 'react'
import axios from 'axios';
function AdminProtected(props) {
    const{Component} = props
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
       // console.log(location.state.previousUrl)
       async function CheckAdmin(){
            try{
                const product = await axios.get(`http://localhost:3001/checkadmin/${localStorage.getItem("user_id")}/`)
                console.log(product);
                
            }catch(err){

            }
       }
      
    })
  return (

    <Component></Component>
    
  )
}

export default AdminProtected
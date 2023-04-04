import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "../style/email_verification.css"


export default function EmailVerification (){
    // const[url,setUrl] = useState();
    const[iD,setId] = useState();
    const[Token,setToken] = useState();
    const[message,setMessage] = useState();

     async function setEmailURL(){
      
        let url = window.location.href;
       if(url){
        let id_first = url.indexOf("user/") + 5;
        let id_second = url.indexOf("/verify");
        let id = url.slice(id_first,id_second);
 
        let token_first = url.indexOf("verify");
        let token = url.slice(token_first + 7);
     

        try{
            const verify =  await axios.get(`http://localhost:3001/user/${id}/verify/${token}`);
            console.log(verify.data + "working");
            setMessage(verify.data.message);
            
        }catch(err){
         
            console.log(err);
        }
       
       }
     

    }

    
       

   

    useEffect(()=>{
     
       
        setEmailURL();
    
        console.log("fire once");


    },[])
  

   
  return (
    <div className='email-verification-container'>

    <div className='email-verification'>
      <h1>{message}</h1>
    </div>
    </div>

  )
}

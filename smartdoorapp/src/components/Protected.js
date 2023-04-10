import React, { useEffect,useContext } from 'react'
import { loginContext } from './Context';
import { useNavigate} from 'react-router-dom';


function Protected(props) {

 const{setValidationBox} = useContext(loginContext);

 const{Component} = props
 const navigate = useNavigate();

 useEffect(()=>{
    // console.log(location.state.previousUrl)
    let login = localStorage.getItem("loginSucess");
    console.log(login);
    if(login==undefined||login==null||login==false){
       
        // <Navigate to="/" replace={true}></Navigate>
        navigate(-1);

        setValidationBox(true);
       
    }
    
    console.log(props);
 })
  return (
    <div><Component></Component></div>
  )
}

export default Protected;
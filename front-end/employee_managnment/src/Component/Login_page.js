import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login_page() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');

    const passwordChange= (event) => {
        setPassword(event.target.value);
    }
  const emailChange = (event)=>{
    setEmail(event.target.value);
    
  }
  const submitDetails = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login' , {email , password}).then((response)=>{
       if(response.status === 200) navigate('/home');
       else console.log("error");
    }).catch(
        (e) => {
            console.log(e);
        }
    )
  }
  

  function Password_data() {
  }
  return (
    
    <div>

     <h3 style={{}} > LOGIN  PAGE </h3>

<form >  
<h4> USERNAME</h4>  
<input type="text" onChange={emailChange} value={email} placeholder="Enter your email id"/>  
<h4> PASSWORD</h4>  
<input type="password" onChange={passwordChange} value={password} placeholder="Enter your password"/><br/>
<input  style={{"margin":"20px"}} onClick={submitDetails} type="submit" value="Login"/>  

</form>  
    </div>
  )
}

export default Login_page

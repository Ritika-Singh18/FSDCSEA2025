import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
function Login({loginData}) {


  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate=useNavigate();

  function verification(e){
    // alert("Hii "+email +" "+ password);
    e.preventDefault();
    if(loginData.email === email){
      if(loginData.password === password){
        navigate('/dashboard');
      }
      else{
        alert("Password is not correct");
      }
    }else{
      alert("Email is not registered");
    }
  }
  return (
    <>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={verification} class="btn btn-primary">Submit</button>
</form>
    </>
    
  )
}

export default Login
import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import GoogleSignIn from './GoogleSignIn/GoogleSignIn';

const Login = () => {
    let navigate = useNavigate();
  let location = useLocation();
 
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [inError,setInError] = useState('');
      const handleEmail = (e) =>{
          setEmail(e.target.value);
      }
      const handlePassword = (e) =>{
          setPassword(e.target.value);
      }

      const handleLogin = (e) =>{
          e.preventDefault();
          signInWithEmailAndPassword(email,password);
          
      }
      if(user){
        navigate(from, { replace: true });
      }
    return (
        <div className='w-50 m-auto mt-5 bg-secondary border rounded-lg mb-5'>
         <form className=' text-center p-5' onSubmit={handleLogin}>
  <div className="form-group">
    <label for="exampleInputEmail1" className='m-2 text-light'>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmail} required/>

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className='m-2 text-light'>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePassword} required/>
  </div>
 
  <button type="submit" className="btn btn-success m-2 pe-3 ps-3 pt-2 pb-2">Login</button>


</form>
<div className='text-center'>
<GoogleSignIn></GoogleSignIn>
<p>No account ? <Link to='/register' className='text-decoration-none text-light'>Please Register First</Link> </p>
</div>


        </div>
    );
};

export default Login;
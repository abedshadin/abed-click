import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import GoogleSignIn from '../Login/GoogleSignIn/GoogleSignIn';

const Register = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [inError,setInError] = useState('');
      const handleEmail = (e) =>{
          setEmail(e.target.value);
      }
      const handlePassword = (e) =>{
          setPassword(e.target.value);
      }
      const handleregister = async (e) =>{
          e.preventDefault();
          createUserWithEmailAndPassword(email,password);
         
        
      }
      if(user){
        navigate(from, { replace: true });
      }
    return (
        <div className='w-50 m-auto mt-5 bg-secondary border rounded-lg'>
         <form className=' text-center border p-5' onSubmit={handleregister}>
  <div className="form-group">
    <label for="exampleInputEmail1" className='m-2 text-light'>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmail} required/>

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className='m-2 text-light'>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePassword} required/>
  </div>
 {error}
  <button type="submit" className="btn btn-success m-2 pe-3 ps-3 pt-2 pb-2">Register</button>
   <GoogleSignIn></GoogleSignIn>
  <p>Already account ? <Link to='/login' className='text-decoration-none text-light'>Please Login</Link> </p>
</form>
        </div>
    );
};

export default Register;
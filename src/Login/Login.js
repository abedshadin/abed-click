
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebase.init';
import GoogleSignIn from './GoogleSignIn/GoogleSignIn';
import '../minRegLogin.css'

const Login = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
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
      const resetPassword=async() =>{
     
        if(email){
          await sendPasswordResetEmail(email);
          toast('Sent email');
        }
        else{
          toast('Please Enter Email')
        }
     
      }
      if(error){
        console.log(error.message);
      }
  useEffect(()=>{
    if(error){
      switch(error?.code){
        case "auth/wrong-password":
          toast('Wrong password')
          break;
        case "auth/user-not-found":
          toast('User not found')
          break;
          default:
          toast('some')
      }
    }
  },[error])
   
    
      if(user){
        navigate(from, { replace: true });
      }
     
    return (
      <div className='minRegLogin'>
        <div className='w-50 m-auto mt-5 bg-secondary border rounded-lg mb-5'>
          <h1 className='text-center mt-2 text-light'>LOGIN</h1>
         <form className=' text-center ps-5 pe-5' onSubmit={handleLogin}>
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
<p>No account ? <Link to='/register' className='text-decoration-none text-light'>Please Register !!!</Link> </p>
<p>Forget Password ? <button className='text-light btn btn-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

<ToastContainer />
</div>


        </div>
        </div>
    );
};

export default Login;
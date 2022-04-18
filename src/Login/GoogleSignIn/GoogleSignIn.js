import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
 
    let from = location.state?.from?.pathname || "/";
    const handleSign = ()=>{
        signInWithGoogle();
      
    }
    if(user){
        navigate(from, { replace: true });
    }
 
    return (
        <div>
             <button className='bg-primary h6 text-light pt-2 pb-2 pe-3 ps-3 rounded-pill' onClick={handleSign}><img src="https://www.svgrepo.com/show/355037/google.svg" alt="" /> Log in with Google</button>
        </div>
    );
};

export default GoogleSignIn;
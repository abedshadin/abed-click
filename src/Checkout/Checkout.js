import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const Checkout = () => {
    const {pack} = useParams();
    const notify = () => toast("Wow so easy !");
 
    return (
        <div className='container text-center mt-5'>
        <h1> Package : {pack}</h1>
        <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
        </div>
    );
};

export default Checkout;
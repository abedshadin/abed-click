import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {pack} = useParams();
 
    return (
        <div className='container text-center mt-5'>
        <h1> Package : {pack}</h1>
        </div>
    );
};

export default Checkout;
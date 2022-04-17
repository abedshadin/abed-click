import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {pack} = useParams();
 
    return (
        <div>
         Page No : {pack}
        </div>
    );
};

export default Checkout;
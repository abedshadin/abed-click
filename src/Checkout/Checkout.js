import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();
 
    return (
        <div>
         Page No : {serviceId}
        </div>
    );
};

export default Checkout;
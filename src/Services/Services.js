import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='container mt-2 text-center'>
            <h1 className='mb-3'>Services</h1>
        <div className='row mb-5'>
           {
               services.map(service=><Service service={service} key={service.id}></Service>)
           }
        </div>
        </div>
    );
};

export default Services;
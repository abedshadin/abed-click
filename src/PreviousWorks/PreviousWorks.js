import React, { useEffect, useState } from 'react';
import PreviousWork from '../PreviousWork/PreviousWork';

const PreviousWorks = () => {
    const [works,setWorks] = useState([]);
    useEffect(()=>{
        fetch('works.json')
        .then(res=>res.json())
        .then(data=>setWorks(data));
    },[])
    return (
        
             <div className='container mt-2 text-center'>
            <h1 className='mb-3'>Previous Works</h1>
        <div className='row mb-5'>
           {
               works.map(work=><PreviousWork work={work} key={work.id}></PreviousWork>)
           }
        </div>
        </div>
     
    );
};

export default PreviousWorks;
import React from 'react';
import Banner from '../Banner/Banner';
import PreviousWorks from '../PreviousWorks/PreviousWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <Services></Services>
            <PreviousWorks></PreviousWorks>
            
        </div>
    );
};

export default Home;
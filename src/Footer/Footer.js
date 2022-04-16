import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
           <footer className="bg-light text-center text-lg-start">

  <div className="text-center p-3 bg-secondary text-light">
    &copy; {year} Copyright
  </div>

</footer>
        </div>
    );
};

export default Footer;
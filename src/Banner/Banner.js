import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/8KBbKXS/Green-Black-Rustic-Flower-Illustration-Modern-Happy-Wedding-Banners.png"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/6bTzJKs/Anniversary-Banner-Landscape.png"
      alt="Second slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/L5LjbRG/White-Store-Sign-Shape-and-Background-Rustic-Flower-Illustration-Welcome-To-Our-Wedding-Banners.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
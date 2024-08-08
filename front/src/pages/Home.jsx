import React, { useState } from 'react';
import "../styles/home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
         interval={2000}
         infiniteLoop={true}
        onChange={handleSlideChange}
      >
        <div className={`home-bgi-container ${currentSlide === 0 ? 'animate' : ''}`}>
          <img className={`im1 ${currentSlide === 0 ? 'out' : 'in'}`} src="/assets/images/img2.jpg" />
          <img className={`im2 ${currentSlide === 0 ? 'out' : 'in'}`} src="/assets/images/img1.jpg" />
        </div>

        <div className={`home-bgi-container ${currentSlide === 1 ? 'animate' : ''}`}>
          <img className={`im1 ${currentSlide === 1 ? 'out' : 'in'}`} src="/assets/images/img5.jpg" />
          <img className={`im2 ${currentSlide === 1 ? 'out' : 'in'}`} src="/assets/images/img6.jpg" />
        </div>

        <div className={`home-bgi-container ${currentSlide === 2 ? 'animate' : ''}`}>
          <img className={`im3 ${currentSlide === 2 ? 'out' : 'in'}`} src="/assets/images/img2.jpg" />
          <img className={`im4 ${currentSlide === 2 ? 'out' : 'in'}`} src="/assets/images/img1.jpg" />
        </div>

        <div className={`home-bgi-container ${currentSlide === 3 ? 'animate' : ''}`}>
          <img className={`im1 ${currentSlide === 3 ? 'out' : 'in'}`} src="/assets/images/img5.jpg" />
          <img className={`im2 ${currentSlide === 3 ? 'out' : 'in'}`} src="/assets/images/img6.jpg" />
        </div>
      </Carousel>
    </>
  );
};

export default Home;

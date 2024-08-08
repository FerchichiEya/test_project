import React, { useState } from 'react';
import "../styles/home.css";

const Home = () => {
  const [animationState, setAnimationState] = useState('');

  const handleMoveImage = () => {
    setAnimationState('animate');
    // Reset the animation state after animation duration
    setTimeout(() => setAnimationState(''), 5000); // Adjust the timeout to match the longest animation duration
  };

  return (
    <>
      <div className="home-bgi-container">
        <div className="home-bgi-content">
          <img className={`bgi-img1 ${animationState ? 'bgi-img1-move' : ''}`} src="/assets/images/img1.jpg" alt="First Image" />
          <img className={`bgi-img2 ${animationState ? 'bgi-img2-move' : ''}`} src="/assets/images/img2.jpg" alt="Second Image" />
          <img className={`bgi-img5 ${animationState ? 'bgi-img5-move' : ''}`} src="/assets/images/img5.jpg" alt="Third Image" />
          <img className={`bgi-img6 ${animationState ? 'bgi-img6-move' : ''}`} src="/assets/images/img6.jpg" alt="Fourth Image" />
        </div>
        <button style={{position: 'absolute'}} onClick={handleMoveImage}>Move Images</button>
      </div>
    </>
  );
};

export default Home;

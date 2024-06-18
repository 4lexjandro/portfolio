import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import '../style.css'; // Assuming you have your styles defined here

import Footer from '../Parts/Footer';
import Spinner from '../Parts/Spinner.jsx';

import Water from '../Visuals/Water.JPG';
import Car from '../Visuals/Front/Car.png';
import Blue from '../Visuals/Front/Blue.jpg';
import SKY from '../Visuals/Front/SKY.JPG';
import Night from '../Visuals/Front/Night.jpeg';

export const Home = () => {
  const [loading] = useState(false);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='contextt'>

      <div className="image-container">
        <img src={Water} alt="4pulenz"/>
        <div className="overlay-text">
          <h1 className='title'>4PULENZ</h1>
          <h1 className='titlestwo'>Soar into Orbit</h1>
        </div>
      </div>

      <div className="gradient-text">
        <h2 className='Services'>Services</h2>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <a href='/airpic'>
            <LazyLoad once>
              <img src={SKY} alt="" />
            </LazyLoad>
            <div className="overlay">
              <span>Aerial Photo/Video</span>
            </div>
          </a>
        </div>

        <div className="grid-item">
          <a href='/rollers'>
            <img src={Car} alt="" />
            <div className="overlay">
              <span>Rollers</span>
            </div>
          </a>
        </div>

        <div className="grid-item">
          <a href='/groundpics'>
            <img src={Blue} alt="" />
            <div className="overlay">
              <span>Ground Photo/Video</span>
            </div>
          </a>
        </div>
        
        <div className="grid-item">
          <a href='/fpv'>
            <img src={Night} alt="" />
            <div className="overlay">
              <span>FPV</span>
            </div>
          </a>
        </div>
      </div>

      <div className="Wrappa">
        <div className="text-box">
          <h2>Certified</h2>
          <small>FAA Part 107 certified professional. This certification demonstrates compliance with federal regulations, ensuring that operations meet the highest standards of safety and legality.</small>
        </div>
        <div className="text-box">
          <h2>Expert</h2>
          <small>Specialized in the offered services to enhance results and focus on what 4PULENZ does best, create quality. Quality is produced through flight, editing, and capturing the perfect motions at the perfect time.</small>
        </div>
        <div className="text-box">
          <h2>Safety</h2> 
          <small>Safety is always prioritized. With comprehensive aviation insurance coverage, operations are efficient with safety measures emphasized to ensure a secure environment.</small>
        </div>
        <div className="text-box">
          <h2>Understanding</h2> 
          <small>Listening to prioritize your needs & desires that you would like to achieve with offered services.</small>
        </div>

        <a href='/contact' className='text-box'>
          <h2>Free Quote</h2>
        </a>

        <div className="homenote">
          <img src={Water} alt=""/>
          <small className='apulenz'>
            From live streaming events with countless people to capturing exquisite shots of vehicles, 4PULENZ has the capability to take on a variety of projects. With FAA certification, we are experienced in the field and will work with you to fulfill your needs.
          </small>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

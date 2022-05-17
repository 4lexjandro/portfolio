import React from 'react'
import Boat from '../Visuals/Boat.mp4';


function About() {
  return (
      <div className="main">
      <div className="overlay"></div>
      

      <video autoPlay loop muted id='video' className="vid">
        <source
          src={Boat}
          type="video/mp4"
        />
        </video>
        <div className="content">
          <h1>Welcome</h1>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>To my site</p>
          <p>Ned to add content here on about me</p>
           </div>
           
      </div>
      
  )
}

export default About
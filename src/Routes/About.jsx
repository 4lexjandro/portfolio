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
          
          <h1>I enjoy pushing my creative boundaries</h1>
          <br/>
            <h3>Web development</h3>
            <ul>
              <li>React, Django</li>
              <li>HTML, Python</li>
              <li>CSS, TailwindCSS, Daisyui</li>
            </ul>
            <br/>

            <h3>3D Animations</h3>
            <ul>
              <li>Blender</li>
              <li>Short Films Coming soon</li>
             
            </ul>
            <br/>

            <h3>Financial Independence</h3>
            <ul>
              <li>Investing</li>
              <li>Seeking oppurtunities </li>
              <li>Real Estate</li>
            </ul>




                 
                 
                
         
          

                
  






           </div>
           
      </div>
      
  )
}

export default About
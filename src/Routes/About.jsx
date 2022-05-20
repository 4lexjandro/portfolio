import React from 'react'
import Boat from '../Visuals/Boat.mp4';
import { motion } from "framer-motion"


function Junk() {
  return (
      <div className="main">
      <div className="overlay"></div>
      <video autoPlay loop muted playsinline id='video' className="vid">
        <source
          src={Boat}
          type="video/mp4"
        />
        </video>
        <div className="content">
         <br/><br/><br/><br/><br/><br/>
          <motion.div animate={{ x: 100,rotate:360 }}   
transition={{ duration: 2, repeat: Infinity }} >Pushing</motion.div>
          
               <h5>my creative boundaries</h5>
               <motion.div
                drag
                dragTransition=
                {{
                min: 0,
                max: 300,
                bounceStiffness: 100
                }}
                >
                Otherwise, life is a drag
                </motion.div>
          <br/>
          <br/>
          <br/>
          <h3 className="h3"> 
          <motion.div animate={{ scale: [2, 2, 1] }} >
          <motion.div animate={{ x: 150, y: 50, rotate:90 }} >Web Development</motion.div>
          </motion.div>
          </h3>
            <ul>
              <li>React, Django</li>
              <li>HTML, Javascript, Python</li>
              <li>CSS, TailwindCSS, Daisyui</li>
            </ul>
            <br/>

            <h3 className="h3"> 
            <motion.div animate={{ scale: [2, 2, 1] }} > 
          <motion.div animate={{ x: -150, y: 50, rotate:90 }} >Animations & Art</motion.div>
          </motion.div>
          </h3>
            <ul>
              <li>Blender, GIMP, Darktable</li>
              <li>Short Films Coming soon</li>
             
            </ul>
            <br/><br/><br/><br/>
            <h3 className="h3"> 
            <motion.div animate={{ scale: [2, 2, 1] }} > 
          <motion.div animate={{ x: 150, y: 50, rotate:90 }} >Wealth</motion.div>
          </motion.div>
          </h3>
            <ul>
              <li>Investing</li>
              <li>Seeking oppurtunities </li>
              <li>Real Estate</li>
            </ul>
           </div>
      </div>
      
  )
}

export default Junk
import React from 'react'
import Boat from '../Visuals/Boat.mp4';


function About() {
  return (
    <div className="text">
      
      
      
      
      
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div class="relative z-30 p-5 text-2xl text-white bg-red-300 bg-opacity-50 rounded-xl">
    I enjoy being creative with Blender, React, 
    <p>and
    interested in Real estate, financial 
    <p>independence, and space!</p>
    </p>
  </div>
  

 
  
  

      <video autoPlay loop muted id='video' class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source
          src={Boat}
          type="video/mp4"
        />


      <p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>
<p>About page here</p>

       </video>
      

       
       </header>
       

       
       
       
       
       
      
      
      
      </div>
  )
}

export default About
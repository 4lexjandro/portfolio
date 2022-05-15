import React from 'react'
import Drive from '../Visuals/Drive.mp4';


function Contact() {
  return (
    <div >
      
      
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div class="relative z-30 h-1/5 p-5 text-2xl text-white bg-red-300 bg-opacity-50 rounded-xl">
  <p>4lexmendezz@gmail.com</p>
    Also, find my links at the bottom 
    <p> and connect with me👇</p>
   
  </div>
  
  <p>pow</p>
  

      <video autoPlay loop muted id='video' class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source
          src={Drive}
          type="video/mp4"
        />
       
      

      
      
      
    
       </video>
       </header>
       
       
       
      
      
      
      </div>
  )
}

export default Contact
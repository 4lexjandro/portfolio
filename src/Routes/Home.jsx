import { motion } from 'framer-motion'
import '../style.css'
import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'
import Water from '../Visuals/Water.JPG'




export const Home = () => {
  const [loading] = useState(false)
  if (loading) {
    return <Spinner />
  }

  

    
  return (
    
    
<div className='contextt'>


  





  <div class="image-container">
  <img src={Water} alt=""/>
  <div class="overlay-text">
    
<motion.div
  animate={{ x: 0, y: 1, opacity: 1 }}
  transition={{
    
  
    default: { duration: .5 },
  }}
><h1 className='title'>4PULENZ</h1>
<motion.div
  animate={{
   x:0,
   y:0,
    scale: 1.0,
    rotate: 1440,
    
  }}
>
  <br/>

<h3 className='titlestwo'>Soar into Orbit</h3>
<br/>
</motion.div>
</motion.div>










  </div>
</div>












<h2>Services</h2>




<div class="grid-container">
    <div class="grid-item">
        <img src={Water} alt="" />
        <div class="overlay">Aerial & Ground Photo/Video</div>
    </div>
    <div class="grid-item">
        <img src={Water} alt="" />
        <div class="overlay">FPV Drone Video</div>
    </div>
    <div class="grid-item">
        <img src={Water} alt="" />
        <div class="overlay">Events</div>
    </div>
    
    <div class="grid-item">
        <img src={Water} alt="" />
        <div class="overlay">Industrial Inspection</div>
    </div>
   
    
</div>

<div class="Wrappa">
    <div class="text-box">
    <h3>Certified</h3>
    <small> FAA Part 107 certified professional. This certification demonstrates compliance with federal regulations, ensuring that operations meet the highest standards of safety and legality. </small>
  </div>
    <div class="text-box">
    <h3>Expert</h3>
    <small>Specialized in the offered services to enhance results and focus on what 4PULENZ does best, create quality. Quality is produced through flight, editing, and capturing the perfect motions at the perfect time. </small>
  </div>
  <div class="text-box">
    <h3>Safety</h3> 
    <small>Safety is always prioritized. With comprehensive aviation insurance coverage, operations are efficient with safety measures emphasized to ensure a secure enviroment.</small>
  </div>
    <div class="text-box">
    <h3>Understanding  </h3> 
    <small>Listening to prioritize your needs & desires that you would like to achieve with offered services.</small>
  </div>

<a href='/contact' className='text-box'>
<h4 class=''>Schedule A Free Consultation</h4>
</a>
  









<div class="homenote">
  <img src={Water} alt=""/>
  <small>
  From live streaming events with countless people to capturing exquisite shots of vehicles, 
  4PULENZ has the capability to take on a variety of projects. 
  With FAA certification, our pilots are well experienced in the field and will work with you to fulfill your needs.
  </small>
</div>

  
    
</div>













<Footer/>



    
    <div className=""> 
      {/* <Footer /> */}
   </div>
      
    </div>
  )
}

export default Home
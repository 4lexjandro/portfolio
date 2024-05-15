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


  





  <div className="image-container">
  <img src={Water} alt="4pulenz"/>
  <div className="overlay-text">
    
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




<div className="grid-container">
    <div className="grid-item">
        <img src={Water} alt="" />
        <p className="overlay">Aerial & Ground Photo/Video</p>
    </div>
    <div className="grid-item">
        <img src={Water} alt="" />
        <p className="overlay">FPV Drone Video</p>
    </div>
    <div className="grid-item">
        <img src={Water} alt="" />
        <p className="overlay">Events</p>
    </div>
    
    <div className="grid-item">
        <img src={Water} alt="" />
        <p className="overlay">Industrial Inspection</p>
    </div>
   
    
</div>

<div className="Wrappa">
    <div className="text-box">
    <h3>Certified</h3>
    <small> FAA Part 107 certified professional. This certification demonstrates compliance with federal regulations, ensuring that operations meet the highest standards of safety and legality. </small>
  </div>
    <div className="text-box">
    <h3>Expert</h3>
    <small>Specialized in the offered services to enhance results and focus on what 4PULENZ does best, create quality. Quality is produced through flight, editing, and capturing the perfect motions at the perfect time. </small>
  </div>
  <div className="text-box">
    <h3>Safety</h3> 
    <small>Safety is always prioritized. With comprehensive aviation insurance coverage, operations are efficient with safety measures emphasized to ensure a secure enviroment.</small>
  </div>
    <div className="text-box">
    <h3>Understanding  </h3> 
    <small>Listening to prioritize your needs & desires that you would like to achieve with offered services.</small>
  </div>

<a href='/contact' className='text-box'>
<h4 className=''>Schedule A Free Consultation</h4>
</a>
  









<div className="homenote">
  <img src={Water} alt=""/>
  <small className='apulenz'>
  From live streaming events with countless people to capturing exquisite shots of vehicles, 
  4PULENZ has the capability to take on a variety of projects. 
  With FAA certification, we are experienced in the field and will work with you to fulfill your needs.
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
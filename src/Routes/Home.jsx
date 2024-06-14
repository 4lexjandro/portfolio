import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload';
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
    rotate: 4320,
    
  }}
>
  <br/>

<h1 className='titlestwo'>Soar into Orbit</h1>
<br/>
</motion.div>
</motion.div>

  </div>
</div>











<div class="gradient-text">
  <h2 className='Services'>Services</h2>
  
</div>







    <div className="grid-container">
  <div className="grid-item">
    <a href='/airpic'>
    <LazyLoad height={200} once>
      <img src={Water} alt="" />
      </LazyLoad>
    </a>
    <a href='/airpic' className="overlay">Aerial Photo/Video</a>
  </div>




    

  <div className="grid-item">
    <a href='/rollers'>
      <img src={Water} alt="" />
    </a>
    <a href='/rollers' className="overlay">Rollers</a>
  </div>



  <div className="grid-item">
    <a href='/groundpics'>
      <img src={Water} alt="" />
    </a>
    <a href='/' className="overlay">Ground Photo/Video</a>
  </div>
    
  <div className="grid-item">
    <a href='/fpv'>
      <img src={Water} alt="" />
    </a>
    <a href='/' className="overlay">FPV</a>
  </div>
   
    
</div>



<div className="Wrappa">
    <div className="text-box">
    <h2>Certified</h2>
    <small> FAA Part 107 certified professional. This certification demonstrates compliance with federal regulations, ensuring that operations meet the highest standards of safety and legality. </small>
  </div>
    <div className="text-box">
    <h2>Expert</h2>
    <small>Specialized in the offered services to enhance results and focus on what 4PULENZ does best, create quality. Quality is produced through flight, editing, and capturing the perfect motions at the perfect time. </small>
  </div>
  <div className="text-box">
    <h2>Safety</h2> 
    <small>Safety is always prioritized. With comprehensive aviation insurance coverage, operations are efficient with safety measures emphasized to ensure a secure enviroment.</small>
  </div>
    <div className="text-box">
    <h2>Understanding  </h2> 
    <small>Listening to prioritize your needs & desires that you would like to achieve with offered services.</small>
  </div>


  

<a href='/contact' className='text-box'>
<h2 className=''>Free Quote</h2>
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
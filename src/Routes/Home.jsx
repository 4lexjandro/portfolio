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
    
<div className=''>
  
  
   
   



<section className="contextt" >

        

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

<h3 className='titlestwo'>Soar into Orbit</h3>
<br/>





</motion.div>

 


</motion.div>





  <div class="picture">
    <img src={Water}  alt='' /> 
  </div>
  
  


<div class="row">
  <div class="column">
    <h3>Understanding</h3>
    <small>Listening to prioritize your needs & desires that you would like to achieve with offered services.</small>

  </div>
  <div class="column">
    <h3>Comfort</h3>
    <small> Projects consist of enjoyment for client as much as pilot to ensure we both receive a positive experience. </small>
  </div>
  <div class="column">
    <h3>Expert</h3>
    <small>Specialized in the offered services to enhance results and focus on what 4PULENZ does best, create quality </small>
  </div>
  <div class="column">
    <h3>Visuals</h3>
    <small>Experienced in editing content to ensure you receive quality results you will be content with</small>
  </div>
 
  
  
</div>

{/* <div class="row">
  <div class="column">
    <img src={Water}  alt='' /> 
  </div>
  
  <div class="column">
    <img src={Water}  alt='' /> 
  </div>
</div> */}
{/* 

<p>Receive surperior aerial photography</p> */}












<Footer/>
</section>


    
    <div className=""> 
      {/* <Footer /> */}
   </div>
      
    </div>
  )
}

export default Home
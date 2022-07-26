
import React from 'react'
import { motion } from 'framer-motion'
import head4 from '../Visuals/head4.png'
import rocket1 from '../Visuals/rocket1.png'
import rocket2 from '../Visuals/rocket2.png'
import rocket3 from '../Visuals/rocket3.png'
import rocket4 from '../Visuals/rocket4.png'
import rock1 from '../Visuals/rock1.png'
import rock2 from '../Visuals/rock2.png'
import '../style.css'
import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'


export const Home = () => {

  
  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }


    
  return (
    
<div className='area'>
  
    
    <img src={head4} className='w-full h-full object-cover absolute ' alt='helmet'/>

   



<section className="contextt" >

        <motion.div
  animate={{ x: -30, y: 120, opacity: 1 }}
  transition={{
    delay: 1,
    x: { type: "spring", stiffness: 400 },
    default: { duration: 3 },
  }}
><h1>I'm Alex</h1></motion.div>

<motion.div
  animate={{ x: [0, -30, 0] }}
>
    <h1>Welcome Everyone !</h1>
</motion.div>


<motion.div
  animate={{ x: -30, y: 100, opacity: 1 }}
  transition={{
    delay: 2,
    x: { type: "spring", stiffness: 100 },
    default: { duration: 2 },
  }}
>
    <h3>Web Developer</h3>
    <h3>Animator</h3>
    <h3>Food Enthusiast</h3>
</motion.div>



<motion.div
  animate={{ x: -30, y: 90, opacity: 5 }}
  transition={{
    delay: 2,
    x: { type: "spring", stiffness: 400 },
    default: { duration: 1 },
  }}
><h1>Creating Projects Daily</h1></motion.div>
</section>

<div className="area" >
            <ul className="circles" >
                    <li>
                        <img src ={rocket1} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket2} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket3} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket4} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock1} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock2} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock2} alt="" height="" width="" /> 
                    </li>
                    <li>
                        <img src ={rock1} alt="" height="" width="" /> 
                    </li>
                    <li>
                        <img src ={rock2} alt="" height="" width="" /> 
                    </li>
                    <li>
                        <img src ={rock1} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock1} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock1} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket2} alt="" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket4} alt="" height="" width="" />
                    </li>
            </ul>
            
    </div >
    
      <Footer />
  
    
      
    </div>
  )
}

export default Home
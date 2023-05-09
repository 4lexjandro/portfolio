
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
    {/* Old classname for img
    w-full h-full object-cover absolute  */}

   



<section className="contextt" >

        <motion.div
  animate={{ x: -30, y: 90, opacity: 1 }}
  transition={{
    delay: .1,
    x: { type: "spring", stiffness: 400 },
    default: { duration: 3 },
  }}
><h1>I'm Alex </h1>
<h3>Web Developer</h3>
<h3>Attempting to improve myself daily</h3>
</motion.div>




<motion.div
  animate={{ x: [0, -9000, -20], y:-85 }}
>
    <h1>Welcome!</h1>
</motion.div>







</section>

<div className="area" >
            <ul className="circles" >
                    <li>
                        <img src ={rocket1} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket2} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket3} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket4} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock1} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock2} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock2} alt="gravity" height="" width="" /> 
                    </li>
                    <li>
                        <img src ={rock1} alt="gravity" height="" width="" /> 
                    </li>
                    <li>
                        <img src ={rock2} alt="gravity" height="" width="" /> 
                    </li>
                    <li>
                        <img src ={rock1} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock1} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rock1} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket2} alt="gravity" height="" width="" />
                    </li>
                    <li>
                        <img src ={rocket4} alt="gravity" height="" width="" />
                    </li>
            </ul>
            
    </div >
    
      <Footer />
  
    
      
    </div>
  )
}

export default Home
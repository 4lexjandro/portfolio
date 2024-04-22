
import React from 'react'
import { motion } from 'framer-motion'

import head5 from '../Visuals/head5.png'

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
    
<div className=''>
  
    <div className="picture">
    <img src={head5} className='picture' alt='helmet'/>
    {/* Old classname for img
    w-full h-full object-cover absolute  */}
    {/* w-5/6 h-5/6  */}
    </div>

   



<section className="contextt" >

        <motion.div
  animate={{ x: 0, y: 100, opacity: 1 }}
  transition={{
    
  
    default: { duration: 3 },
  }}
><h1>Hi, I'm Alex</h1>
<h3>I create digital content</h3>

</motion.div>




{/* <motion.div
  animate={{ x: [0, -9000, -20], y:-110 }}
>
    <h1>Welcome!</h1>
</motion.div> */}

<motion.div
  animate={{ x: 0, y: -40, opacity: 1 }}
  transition={{
    
  
    default: { duration: 3 },
  }}
><h1>Welcome</h1>


</motion.div>



<motion.div
  animate={{ x: 0, y: -40, opacity: 1 }}
  transition={{
    
  
    default: { duration: 3 },
  }}
>
  

</motion.div>










</section>


    
    <div className="bottom"> 
      <Footer />
   </div>
      
    </div>
  )
}

export default Home
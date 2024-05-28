import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion"
import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'


export const NotFound = () => {


  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }
  return (
    
   
     <div className='hero'>
     <motion.div animate={{ scale: [2, 2, 1] }} >
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

<div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
          Error!
          </h1>
          <h2 className="text-5xl mb-8">404 - Page Not Found</h2>
          <Link to='/' className='btn px-1 py-1 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1 btn-lg' >
          <FaHome className='mr-2' />
          Back To Home
          </Link>
        </div>
      </div>
      </motion.div>
     
      <div className="bottom"> 
      <Footer />
   </div>
  
    </div>
    
  )
}

export default NotFound
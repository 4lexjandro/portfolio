import Footer from '../Parts/Footer'
import { motion } from "framer-motion"
import {FaReact, FaSass, FaCss3, FaHtml5, FaPython, FaBootstrap} from "react-icons/fa"
import { SiDjango, SiTailwindcss, SiBlender, SiCinema4D, SiJavascript, SiMongodb, SiFirebase } from "react-icons/si";
import { DiNodejs, DiGit, } from "react-icons/di";
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'



export const About = () => {

  const [loading] = useState(false)


  if (loading) {
    return <Spinner />
  }
  return (
    <>
    
      <main className="main">
        <section className="content">
         <br/><br/><br/>
        
<br/><br/><br/><br/><br/><br/>


          <motion.div animate={{ x: 100, y: 0, rotate:360 }}
transition={{ duration: 5, repeat: Infinity }} >Pushing</motion.div>

          <h5>my creative boundaries</h5>
               <motion.div
                drag
                dragTransition=
                {{
                min: 0,
                max: 300,
                bounceStiffness: 100
                }}
                >
                Otherwise, life is a drag 
                </motion.div>
          <br/>

          <h3 className="h3">
          <motion.div animate={{ scale: [2, 2, 1] }} >
          <motion.div animate={{ x: 170, y: 50, rotate:90 }} >Web Development</motion.div>
          </motion.div>
          </h3>
           <p>I enjoy creating websites, </p>
           <p>constantly learning, and challenging</p>
           <p>myself to improve who I am.</p>
           <br/>

            <h3 className="h3">
            <motion.div animate={{ scale: [2, 2, 1] }} >
          <motion.div animate={{ x: -150, y:100, rotate:90 }} >Wealth</motion.div>
          </motion.div>
          </h3>

            <p>Financial Independece is a goal</p>
            <p>I wish to achieve in a decade by</p>
            <p>consistently investing, and being</p>
            <p>disciplined.</p>
           </section>




           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <motion.div animate={{ scale: [2, 2, 1] }} >
           <motion.div animate={{ x: -5, y:20, rotate:1080 }} >
           <h1 className="boxes">SKILLSET</h1>
           </motion.div>
           </motion.div>
   \
  <div className="boxes">
  <div className="box"><FaReact className="h-6 w-6"/></div>
  <div className="box"><SiDjango className="h-6 w-6"/></div>
  <div className="box"><SiJavascript className="h-6 w-6"/></div>
  <div className="box"><FaPython className="h-6 w-6"/></div>
  <div className="box"><FaHtml5 className="h-6 w-6"/></div>

  </div>
  <br/>
  <div className="boxes">
  <div className="box"><FaSass className="h-6 w-6"/></div>
  <div className="box"><SiTailwindcss className="h-6 w-6"/></div>
  <div className="box">< FaCss3 className="h-6 w-6"/></div>
  <div className="box"><SiBlender className="h-6 w-6"/></div>
  <div className="box"><SiCinema4D className="h-6 w-6"/></div>
  </div>
  <br/>
  <div className="boxes">
  <div className="box"><DiGit className="h-6 w-6"/></div>
  <div className="box"><FaBootstrap className="h-6 w-6"/></div>
  <div className="box"><DiNodejs className="h-6 w-6"/></div>
  <div className="box"><SiMongodb className="h-6 w-6"/></div>
  <div className="box"><SiFirebase className="h-6 w-6"/></div>

  </div>
<br/><br/><br/>
<div className="bottom"> 
      <Footer />
   </div>


      </main>
      
      </>

  )
}

export default About

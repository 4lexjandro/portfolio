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
      <main className="main">
        <section className="content">
         <br/><br/><br/>
         <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>

         
          <motion.div animate={{ x: 100, y: 0, rotate:360 }}   
transition={{ duration: 2, repeat: Infinity }} >Pushing</motion.div>
          
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
           <p>I enjoy creating and designing.</p>
           <p>I have a passion for constantly learning</p>
           <p>new things, and using those learning</p>
           <p>tools, not just to obtain them.</p>
           <br/>

            <h3 className="h3"> 
            <motion.div animate={{ scale: [2, 2, 1] }} > 
          <motion.div animate={{ x: -150, y:100, rotate:90 }} >Animations & Art</motion.div>
          </motion.div>
          </h3>
            
              <p>I also am fascinated by 3D art</p>
              <p>Hopefully I can combine my</p>
              <p>upshots with my web exp</p>
              <p>Short Films (& website) coming soon</p>
            
            <h3 className="h3"> 
            <motion.div animate={{ scale: [2, 2, 1] }} > 
          <motion.div animate={{ x: 150, y: 100, rotate:90 }} >Wealth</motion.div>
          </motion.div>
          </h3>
            <p>Financial Independece is a goal</p>
            <p>I wish to achieve in a decade by</p>
            <p>consistently investing, discipline, &</p>
            <p>being open minded to new</p>
            <p>oppurtunities.</p>
           </section> 
          
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <h1 className="boxes">SKILLSET</h1>
  <div className="boxes">
  <div className="box"><FaReact class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiDjango class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiJavascript class="animate-bounce h-7 w-7"/></div>
  <div className="box"><FaPython class="animate-bounce h-7 w-7"/></div>
  <div className="box"><FaHtml5 class="animate-bounce h-7 w-7"/></div>
  
  </div>
  <br/>
  <div className="boxes">
  <div className="box"><FaSass class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiTailwindcss class="animate-bounce h-7 w-7"/></div>
  <div className="box">< FaCss3 class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiBlender class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiCinema4D class="animate-bounce h-7 w-7"/></div>
  </div>
  <br/>
  <div className="boxes">
  <div className="box"><DiGit class="animate-bounce h-7 w-7"/></div>
  <div className="box"><FaBootstrap class="animate-bounce h-7 w-7"/></div>
  <div className="box"><DiNodejs class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiMongodb class="animate-bounce h-7 w-7"/></div>
  <div className="box"><SiFirebase class="animate-bounce h-7 w-7"/></div>
  
  </div>
<br/><br/><br/>
  <div>
    <Footer />
  </div>
  
   
      </main>
      
  )
}

export default About
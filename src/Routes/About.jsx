import Footer from '../Parts/Footer'
import { motion } from "framer-motion"
import {FaReact, FaSass, FaCss3, FaHtml5, FaPython, FaBootstrap} from "react-icons/fa"
import { SiDjango, SiTailwindcss, SiBlender, SiCinema4D, SiJavascript, SiMongodb, SiFirebase } from "react-icons/si";
import { DiNodejs, DiGit, } from "react-icons/di";



export const About = () => {
  return (
      <div className="main">
        <div className="content">
         <br/><br/><br/>
         <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<br/><br/><br/><br/><br/><br/><br/>

         
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
           </div> 
          
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <h1 className="boxes">Skills</h1>
  <div className="boxes">
  <div className="box"><FaReact/></div>
  <div className="box"><SiDjango/></div>
  <div className="box"><SiJavascript/></div>
  <div className="box"><FaPython/></div>
  <div className="box"><FaHtml5/></div>
  
  </div>
  <br/>
  <div className="boxes">
  <div className="box"><FaSass/></div>
  <div className="box"><SiTailwindcss/></div>
  <div className="box">< FaCss3/></div>
  <div className="box"><SiBlender/></div>
  <div className="box"><SiCinema4D/></div>
  </div>
  <br/>
  <div className="boxes">
  <div className="box"><DiGit/></div>
  <div className="box"><FaBootstrap/></div>
  <div className="box"><DiNodejs/></div>
  <div className="box"><SiMongodb/></div>
  <div className="box"><SiFirebase/></div>
  
  </div>
<br/><br/><br/>
  <div>
    <Footer />
  </div>
  
   
      </div>
      
  )
}

export default About
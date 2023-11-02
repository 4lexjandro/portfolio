import Footer from '../Parts/Footer'
import { motion } from "framer-motion"
import {FaReact, FaSass, FaCss3, FaHtml5, FaPython, FaBootstrap} from "react-icons/fa"
import { SiDjango, SiTailwindcss, SiBlender, SiCinema4D, SiJavascript, SiMongodb, SiFirebase } from "react-icons/si";
import { DiNodejs, DiGit, } from "react-icons/di";
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'
import head5 from '../Visuals/head5.png'



export const About = () => {

  const [loading] = useState(false)


  if (loading) {
    return <Spinner />
  }
  return (
    <>

<div className="picture">
    <img src={head5} className='picture' alt='helmet'/>
   
    </div>

    
      <main className="main">
        <section className="content">
         
        



          <motion.div animate={{ x: 100, y: 0, rotate:360 }}
transition={{ duration: 3 }} >Pushing</motion.div>

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
               <h5> Otherwise, life is a drag </h5>
                </motion.div>
          <br/>

          
          <h5>I capture pictures and videos with my drone
          </h5>
          <h5>I design and code websites</h5>

           </section>




           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           
           <h1 className="boxes">SKILLSET</h1>
          
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

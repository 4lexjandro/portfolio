import Footer from '../Parts/Footer'
import P6 from '../Visuals/P6.png'
import P8 from '../Visuals/P8.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FaReact, FaSass, FaHtml5, FaBootstrap} from "react-icons/fa"
import { SiJavascript, SiSwiper} from "react-icons/si";
import {  DiGit } from "react-icons/di";
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'


const WorkPage = () => {

  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }
  return (
    <>
<br/><br/><br/><br/>

<main className="container">


     
{/* Cazador website */}
<section className="main-div main-div3"> 
    <header className="card">
       <div className="face face1">
         <div className="content">           
         <a href="http://www.elcazadorcafe.com/">
         <img src ={P6} width="300px" height="300px" alt="pro" /> 
         </a>
   
   <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      
      <FaReact/>
      <SiJavascript/>
      <DiGit/>
      <FaSass/>
      <SiSwiper/>
      <FaBootstrap/>
      
    </section>
    </div>
       </div>
       <div className="face face2">
         <div className="projectCards">
           El Cazador Cafe located in Yonkers, NY
           <br/>
           Project done for local business
           <br/>
           <a href="https://github.com/4lexmendez/restaurant"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>









    
   










    
    
<section className="main-div main-div3">
    <header className="card">
       <div className="face face1">
         <div className="content">     
         {/* Commented Out image for now until further notice  */}
          <a href="https://designp-4-d.vercel.app/">
         <img src ={P8} width="300px" height="300px" alt="pro" /> </a> 
         <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
           <FaReact/>
      <SiJavascript/>
      <DiGit/>
      
      <FaHtml5/>
      
    </section>        
         </div>
       </div>
       <div className="face face2">
       <div className="projectCards">
         Group Project
           <br/>Change color of pad by editing, dragging and dropping.<br/>
           <a href="https://github.com/4lexmendez/agency"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>
    
    



   


  </main>
  <br/><br/><br/><br/><br/><br/><br/><br/>
  
  
  <div className="bottom"> 
      <Footer />
   </div>

    </>
  )
}

export default WorkPage
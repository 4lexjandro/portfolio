import Footer from '../Parts/Footer'
import P2 from '../Visuals/P2.png'
import P3 from '../Visuals/P3.png'
import P6 from '../Visuals/P6.png'
import P8 from '../Visuals/P8.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FaReact, FaSass, FaHtml5, FaBootstrap} from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiSwiper} from "react-icons/si";
import {  DiGit } from "react-icons/di";
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'


const WorkPage = () => {

  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }
  return (
    <main>
<br/><br/><br/><br/>

<main className="container">


     
{/* Cazador website */}
<section className="main-div main-div3"> 
    <header className="card">
       <div className="face face1">
         <div className="content">           
         <a href="https://elcazadorcafe.vercel.app/">
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
         <div className="content">
           <p>El Cazador Cafe located in Yonkers, NY</p>
           <p>Solo project done for local business</p>
           <a href="https://github.com/4lexmendez/restaurant"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>









    
   







{/* Landing Page website */}

    <section className="main-div main-div3"> 
    <header className="card">
       <div className="face face1">
         <div className="content">     
         <a href="https://agency-beige.vercel.app/">
         <img src ={P2} width="300px" height="300px" alt="pro" /> </a>
         <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      <FaReact/>
      <SiJavascript/>
      <DiGit/>
      <SiTailwindcss/>
      <FaHtml5/>
    </section>        
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>
           Marketing agency landing page ready to generate revenue. Created with react smooth scroll.
           </p>
           <a href="https://github.com/4lexmendez/agency"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>



    
    
    
    



    {/* Loving Years website */}

    <section className="main-div main-div3"> 
    <header className="card">
       <div className="face face1">
         <div className="content">
         <a href="https://loving-years.vercel.app/">
         <img src ={P3} width="300px" height="300px" alt="pro" /> </a>
         <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      
      <FaReact/>
      <SiJavascript/>
      <DiGit/>
      <SiTailwindcss/>
      <FaHtml5/>
      <FaBootstrap/>
    </section>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>Gallery of the memories I've created with the girl of my dreams.</p>
           
           <a href="https://github.com/4lexmendez/LovingYears"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>








{/* Design Pad done in class project */}



    <section className="main-div main-div3"> 
    <header className="card">
       <div className="face face1">
         <div className="content">     
         <a href="https://designp-4-d.vercel.app/">
         <img src ={P8} width="300px" height="300px" alt="pro" /> </a>
         <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      <FaReact/>
      <SiJavascript/>
      <DiGit/>

    </section>        
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           
           Group project
           <br/> Drag and Drop colors onto empty pad.
           
           <a href="https://github.com/4lexmendez/DESIGNP4D"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>
    
    
      
    
   
    





    
    
  
    





    
    
    
    

  </main>
  <br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/>
  <Footer/>


    </main>
  )
}

export default WorkPage
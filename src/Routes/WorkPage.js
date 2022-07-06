import Footer from '../Parts/Footer'
import P2 from '../Visuals/P2.png'
import P3 from '../Visuals/P3.png'
import P6 from '../Visuals/P6.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FaReact, FaSass, FaCss3, FaHtml5} from "react-icons/fa"
import { SiTailwindcss, SiJavascript} from "react-icons/si";
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

<main class="container">


     











    
   









    <section class="main-div main-div3"> 
    <header class="card">
       <div class="face face1">
         <div class="content">     
         <a href="https://agency-beige.vercel.app/">
         <img src ={P2} width="300px" height="300px" alt="" /> </a>
         <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      <FaReact/>
      <SiJavascript/>
      <DiGit/>
      <SiTailwindcss/>
      <FaCss3/>
      <FaHtml5/>
    </section>        
         </div>
       </div>
       <div class="face face2">
         <div class="content">
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
    
    
    

    <section class="main-div main-div3"> 
    <header class="card">
       <div class="face face1">
         <div class="content">
         <a href="https://loving-years.vercel.app/">
         <img src ={P3} width="300px" height="300px" alt="" /> </a>
         <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      
      <FaReact/>
      <SiJavascript/>
      <DiGit/>
      <SiTailwindcss/>
      <FaCss3/>
      <FaHtml5/>
    </section>
         </div>
       </div>
       <div class="face face2">
         <div class="content">
           <p>Gallery of the memories I've created with the girl of my dreams.</p>
           
           <a href="https://github.com/4lexmendez/LovingYears"
        className="git">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         </div>
       </div>
    </header>
    </section>
    
    
      
    
   
    





    
    
  
    





    <section class="main-div main-div3"> 
    <header class="card">
       <div class="face face1">
         <div class="content">           
         
         <img src ={P6} width="300px" height="300px" alt="" /> 
   
   <section className=" space-x-2 flex flex-row">
           <small>Tools: </small>
      
      <FaReact/>
      <SiJavascript/>
      <DiGit/>
      <FaSass/>
      <FaHtml5/>
      <DiGit/>
    </section>
    </div>
       </div>
       <div class="face face2">
         <div class="content">
           <p>El Cazador Cafe located in Yonkers, NY</p>
           <p>Barebones of site, check back later for finished result!</p>
           <a href="https://github.com/4lexmendez/restaurant"
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
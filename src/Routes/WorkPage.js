import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'
import Choice from '../Visuals/Choice.png'
import AMM from '../Visuals/AMM.png'
import rock1 from '../Visuals/rock1.png'
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";




const WorkPage = () => {



  return (

    
    <>
  
    
    <main className='contextt'>
    <br/><br/><br/><br/><br/><br/><br/>
    
    

  
    <div className="Wrappa">
    <div className="text-box">
    
    
    <a href='/'>
    
    <h2>Heading</h2>
    
    </a>
    
    <img src={AMM} alt='' href='/'></img>
    
  </div>
    <div className="text-box">
    
    <a href='/'>
    <h2>Heading</h2>
    </a>
    
    <img src={AMM} alt='' href='/'></img>
    
  </div>
  <div className="text-box">
    
    <a href='/'>
    <h2>Heading</h2>
    </a>
    
    <img src={AMM} alt='' href='/'></img>
    
  </div>
    <div className="text-box">
    
    <a href='/'>
    <h2>Heading</h2>
    </a>
    
    <img src={AMM} alt='' href='/'></img>
    
  </div>
  <div className="text-box">
    
    <a href='/'>
    <h2>Heading</h2>
    </a>
    
    <img src={AMM} alt='' href='/'></img>
    
  </div>
  <div className="text-box">
    
    <a href='/'>
    <h2>Heading</h2>
    </a>
    
    <img src={AMM} alt='' href='/'></img>
    
  </div>

</div>


   



<Footer/>


    </main>
    
    </>
    
  )
}

export default WorkPage
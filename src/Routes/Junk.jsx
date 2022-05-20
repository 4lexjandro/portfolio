import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

import LY from '../Visuals/LY.mov'
import agency from '../Visuals/agency.mov'
import github from '../Visuals/github.mov'
import ADVP from '../Visuals/ADVP.mov'
import rest from '../Visuals/rest.mov'
import CS from '../Visuals/CS.mov'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const Junk = ({ isVisible}) => {





  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }


  
  
  return (
    <div className="change">
    <div className="content">
    <div className="text">
    
    <br/> <br/> <br/>
       
    

  
    

   







   
    
    
    </div></div></div>


   
    
  )
}

export default Junk
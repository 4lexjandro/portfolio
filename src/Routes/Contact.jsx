import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import ButtonMailto from './ButtonMailto'

import Drive from '../Visuals/Drive.mp4';





const Message = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
color: white;

text-decoration: none;
z-index: 1;
`;

const Container = styled.div`
  padding: 2rem;
  
`;


function Contact() {
  const [click] = useState(false);
  

  

  
const mq = window.matchMedia("(max-width: 50em)").matches;






  return (
    
    <div className="main">
      <div className="overlay"></div>
      <video autoPlay loop muted id='video' className="vid">
        <source
          src={Drive}
          type="video/mp4"
        />
        </video>

      <div className="content">
        
       
      
      
      
  
  



    



    <Container className="content">
   
      

    {mq ? (
            <Message
              click={+click}
              target="_blank"
              to={{ pathname: "mailto:alexjandrom99@gmail.com" }}
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                 <ButtonMailto label="Write me an E-Mail" mailto="mailto:alexjandrom99@gmail.com" />
                 
                 
              </motion.h3>
            </Message>
          ) : (
            <Message
              click={+false}
              target="_blank"
              to={{ pathname: "mailto:alexjandrom99@gmail.com" }}
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                 <ButtonMailto  label="E-Mail Me " mailto="mailto:alexjandrom99@gmail.com" />
                 
                 
              </motion.h3>
            </Message>
          )}

</Container>
   

      

       
       
       
      
      
       </div>
      </div>
  )
}

export default Contact
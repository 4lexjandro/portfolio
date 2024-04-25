import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from '../Parts/Footer'
import ButtonMailto from './ButtonMailto'
// import Sunset from '../Visuals/Sunset.mp4';
import Spinner from '../Parts/Spinner.jsx'
import Texts from '../Visuals/Texts.png'
import Hand  from '../Visuals/Hand.png'
import ContactForm from '../Parts/ContactForm.jsx'
import {FaPhone, FaEnvelope} from "react-icons/fa"




const Message = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};


text-decoration: none;
z-index: 1;
`;

const Container = styled.div`
  padding: 2rem;
  
`;



export const Contact = () => {
  const [click] = useState(false);
  const mq = window.matchMedia("(max-width: 50em)").matches;  
  const [loading] = useState(false)
    

if (loading) {
  return <Spinner />
}




  return (
    <>
      <div className=''>
    {/* <div className="main">
      <div className="overlay"></div> */}
      {/* Finally it works! */}
      {/* <video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"
      >
        <source
          src={Sunset}
          type="video/mp4"
        />
        </video> */}
        
<div className='contactsLine'>
<img src={Texts} className='pic' alt='helmet'/>
  
<h1>Contact Us</h1>



</div>

<img src={Hand} className='picTwo' alt='helmet'/>
      

    <Container className="emailLine">
      

    {mq ? (
            <Message
              click={+click}
              target="_blank"
              to={{ pathname: "mailto:alexjandrom99@gmail.com" }}
            >
              
               <motion.h3
                initial={{
                }}
                animate={{
                  
                  
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
                
              
                 <ButtonMailto label="alexjandrom99@gmail.com" mailto="mailto:alexjandrom99@gmail.com" />
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
                  
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
                
          <ButtonMailto  label="alexjandrom99@gmail.com " mailto="mailto:alexjandrom99@gmail.com" />
          
              </motion.h3>
              
              
              
            </Message>


            
          )}

</Container>

{/* Need this for phone to work  */}
<br/><br/>



<Container className="phone">


    {mq ? (
            <Message
              click={+click}
              target="_blank"
              to={{ pathname: "tel:+91123-456-7890" }}
            >
              
                 <ButtonMailto label="914- 230 - 3744" mailto="tel:+19142303744" />
                 
                 
              
            </Message>
          ) : (
            <Message
              click={+false}
              target="_blank"
              to={{ pathname: "tel:+91123-456-7890" }}
              
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                
              >
                
          <ButtonMailto label=" 914 - 230 - 3744" mailto="tel:+19142303744"  />
              </motion.h3>
             
              
              
              
              
            </Message>
            


            
          )}

          

</Container>






<br/><br/><br/><br/><br/><br/>
<div className='contactsForm'>
  

<ContactForm />
</div>





   

      

       
       </div>





       <div className="bottom"> 
      <Footer />
   </div>
      
      </>
  )
}

export default Contact
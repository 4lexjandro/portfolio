import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Footer from '../Parts/Footer'
import ButtonMailto from './ButtonMailto'
// import Sunset from '../Visuals/Sunset.mp4';
import Spinner from '../Parts/Spinner.jsx'
import ContactForm from '../Parts/ContactForm.jsx'





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

      
        
       
      
      
      


    



    <Container className="content">

    
   
      

    {mq ? (
            <Message
              click={+click}
              target="_blank"
              to={{ pathname: "mailto:alexjandrom99@gmail.com" }}
            >
             <ButtonMailto label="alexjandrom99@gmail.com" mailto="mailto:alexjandrom99@gmail.com" />
              
            </Message>
          ) : (
            <Message
              click={+false}
              target="_blank"
              to={{ pathname: "mailto:alexjandrom99@gmail.com" }}
            >
          <ButtonMailto  label="alexjandrom99@gmail.com " mailto="mailto:alexjandrom99@gmail.com" />

        
            </Message>

            
          )}
         
              
          

</Container>
<div className="content">
<ContactForm />
</div>
{/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <a href = "tel:914-230-3744" className='btn glass px-1 py-1 bg-pink-900 shadow-xl shadow-red-600/20 sm:px-1 btn-md'>
            <p className="glassButton">914 - 230 - 3744</p>
            </a>
    */}

      

       
       
       
      
      
       </div>
       <div className="bottom"> 
      <Footer />
   </div>
   
      
      </>
  )
}

export default Contact
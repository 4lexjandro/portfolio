
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";





export default function SocialFollow() {
  
  return (
    <div >
    
    <div className="grid grid-flow-col gap-3 ">
       
      <a href="https://github.com/4lexjandro"
        className="barOne">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

     

      <a href="https://twitter.com/4lexjandro_m"
        className="barTwo">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a href="https://www.instagram.com/4lexjandro_m/"
        className="barThree">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/alexjandro-mendoza-17b28a19b/" className="barFour">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <br/>
    
      </div>
      </div>
      
     
    );
  }
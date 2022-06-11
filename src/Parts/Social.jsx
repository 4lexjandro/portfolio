
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";





export default function SocialFollow() {
  const footerYear = new Date().getFullYear()
  return (
    
    <div className="grid grid-flow-col gap-3">
       <p>Copyright &copy; {footerYear} 4lexmendez</p>
      <a href="https://github.com/4lexmendez"
        className="bar">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.youtube.com/channel/UCoEzp7t1xdHp7ItsaD30N8w"
        className="bar">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a href="https://twitter.com/__Alexjandro__"
        className="bar">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a href="https://www.instagram.com/__alexjandro__/"
        className="bar">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/alexjandro-mendoza-17b28a19b/" className="bar">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <br/>
    
      </div>
      
     
    );
  }
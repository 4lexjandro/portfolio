import Social from './Social'
import AM from '../Visuals/AM.png';
import ButtonMailto from '../Routes/ButtonMailto'
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {FaInstagram, FaTwitter} from "react-icons/fa"



const Footer = ( ) => {
    
 





  return (
    
    <>
    <div className='footerLines'>
      <a href='/'>
    <img src={AM} alt="astro" width="100" height="100" />
    </a>

    
        <button className='bots'>
        <ButtonMailto label="alexjandrom99@gmail.com" mailto="mailto:alexjandrom99@gmail.com" />
        </button>

        <br/>
        
        <button className='bots'>
        <ButtonMailto label="914 - 230 - 3744" mailto="tel:+19142303744" />
        </button>

        
        
        <h3>Navigation</h3>
        <a href='/' alt=''>example1</a>
        <br/>
        <a href='/' alt=''>example1</a>
        <br/>
        <a href='/' alt=''>example1</a>
        <br/>
        <a href='/' alt=''>example1</a>
        <br/>
        <a href='/' alt=''>example1</a>
        <br/>
        <a href='/' alt=''>example1</a>





       





        










        
  

  





        




















    
    </div>
    
    </>
  )
}

export default Footer
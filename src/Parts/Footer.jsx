import AM from '../Visuals/AM.png';
import ButtonMailto from '../Routes/ButtonMailto'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faYoutube,
    
  } from "@fortawesome/free-brands-svg-icons";


const Footer = ( ) => {
    
 





  return (
    
    <>
    

<section className='daisyfooter'>




    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-3">
    <a href='/about'className="link link-hover">About</a>
    <a href='/contact'className="link link-hover">Contact</a>
    <a href='/portfolio'className="link link-hover">Portfolio</a>
    <a href='/services'className="link link-hover">Services</a>
    <a href='/prints'className="link link-hover">Prints</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    



    <a href="https://www.instagram.com/4lexjandro_/"
        >
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://www.Twitter.com/4lexjandro_/"
        >
        <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://www.youtube.com/@4lexjandro"
        >
        <FontAwesomeIcon icon={faYoutube} />
    </a>


    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by 4lex</p>
    <button className='bots'>
        <ButtonMailto label="alexjandrom99@gmail.com" mailto="mailto:alexjandrom99@gmail.com" />
        </button>
        <br/>
        
        <button className='bots'>
        <ButtonMailto label="914 - 230 - 3744" mailto="tel:+19142303744" />
        </button>
        <br/>
        <a href='/'>
    <img src={AM} alt="astro" width="70" height="70" />
    </a>

  </aside>
</footer>

</section>

    
    </>
  )
}

export default Footer
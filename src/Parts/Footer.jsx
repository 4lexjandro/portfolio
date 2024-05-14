import AMM from '../Visuals/AMM.png';
import ButtonMailto from '../Routes/ButtonMailto'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faYoutube,
    
  } from "@fortawesome/free-brands-svg-icons";
  import { motion } from "framer-motion";
  import ScrollToTop from './ScrollToTop'


const Footer = ( ) => {
    
 





  return (
    
    <>
    <ScrollToTop/>
    

<section className='daisyfooter'>




    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-3">
    <a href='/'className="link link-hover">Home</a>
    <a href='/contact'className="link link-hover">Contact</a>
    <a href='/work'className="link link-hover">Portfolio</a>
    <a href='/services'className="link link-hover">Services</a>
    {/* <a href='/prints'className="link link-hover">Prints</a> */}
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    


{/* 
    <a className='icon' href="https://www.instagram.com/4lexjandro_/"
        >
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a className='icon' href="https://www.Twitter.com/4lexjandro_/"
        >
        <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a className='icon' href="https://www.youtube.com/@4lexjandro"
        >
        <FontAwesomeIcon icon={faYoutube} />
    </a> */}


    <motion.h3
            initial={{
              
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}      
          >    
      <a className='icon' href="https://www.youtube.com/@4lexjandro"
        >
        <FontAwesomeIcon icon={faYoutube} />
    </a>
          </motion.h3>


          <motion.h3
            initial={{
              
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}      
          >    
       <a className='icon' href="https://www.Twitter.com/4lexjandro_/"
        >
        <FontAwesomeIcon icon={faTwitter} />
    </a>
          </motion.h3>


          <motion.h3
            initial={{
              
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}      
          >    
      <a className='icon' href="https://www.instagram.com/4lexjandro_/"
        >
        <FontAwesomeIcon icon={faInstagram} />
    </a>
          </motion.h3>







    </div>
  </nav> 
  <aside>
    <p className='copyright'>Copyright © 2024 - All right reserved by 4PULENZ</p>

    <button>
    <motion.h3
            initial={{
              
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}      
          >    
      <ButtonMailto label=" 914 - 230 - 3744" mailto="tel:+19142303744"  />
          </motion.h3>
          </button>



<button>
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

                 </button>

    
    



    


{/*     
    <button className='footercontactlines'>
        <ButtonMailto label="alexjandrom99@gmail.com" mailto="mailto:alexjandrom99@gmail.com" />
        </button>
        <br/>
        
        <button className='footercontactlines'>
        <ButtonMailto label="914 - 230 - 3744" mailto="tel:+19142303744" />
        </button> */}




        <br/>
        <a href='/'>
    <img src={AMM} alt="astro" width="70" height="70" />
    </a>

  </aside>
</footer>

</section>

    
    </>
  )
}

export default Footer
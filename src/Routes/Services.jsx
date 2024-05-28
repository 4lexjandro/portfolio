import Footer from '../Parts/Footer'
import Water from '../Visuals/Water.JPG'




const Services = () => {
 


  return (

    
    <>
    
    <main className='contextt'>
    <br/><br/><br/><br/><br/><br/><br/>
   
    <div class="gradient-text">
  <h1>Services</h1>
</div>

    
    <div className="Wrappa">
      
    <div className="portfoliogallery">
      
    
    
    
  
    <h2>Aerial Photo</h2>
  
    
    
    <a href='/airpic'>
    <img src={Water} height='250' width='250' alt='' className='elementz' href='/'></img>
    </a>
  </div>
  
    <div className="portfoliogallery">
    
    
    <h2>Aerial Video</h2>
    
    
    <a href='/airvid'>
    <img src={Water} height='250' width='250' alt='' className='elementz' href='/'></img>
    </a>
  </div>
  <div className="portfoliogallery">
    
    
    <h2>Ground Photo</h2>
    
    
    <a href='/groundpic'>
    <img src={Water} height='250' width='250' alt='' className='elementz' href='/'></img>
    </a>
  </div>
    <div className="portfoliogallery">
    
    
    <h2>Ground Video</h2>
    
    
    <a href='/groundvid'>
    <img src={Water} height='250' width='250' alt='' className='elementz' href='/'></img>
    </a>
  </div>


  <div className="portfoliogallery">
    
    
    <h2>FPV</h2>
    
    
    <a href='/fpv'>
    <img src={Water} height='250' width='250' alt='' className='elementz' href='/'></img>
    </a>
  </div>

  



  <div className="portfoliogallery">
    
    
    <h2>Rollers</h2>
    
    
    <a href='/rollers'>
    <img src={Water} height='250' width='250' alt='' className='elementz' href='/'></img>
    </a>
  </div>
  




</div>


   



<Footer/>



    </main>
    
    
    </>
    
  )
}

export default Services
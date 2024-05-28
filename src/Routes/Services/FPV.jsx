

import Water from '../../Visuals/Water.JPG'; // Importing an example image
import AMM from '../../Visuals/AMM.png'; // Importing an example image
import Sunset from '../../Visuals/Sunset.MP4'; // Importing an example image
import Footer from '../../Parts/Footer'

// Define your array of images

const FPV = () => {
  return (
    <>
    
    <main className='contextt'>
    <br/><br/><br/><br/><br/>
    <div className="grid-wrapper">
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={AMM} alt='' className="masonry" />
	</div>


    <video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"


      
      
      
      
      
      
      >
        <source
          src={Sunset}
          type="video/mp4"
        />
        </video>






	<div className="tall">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="wide">
    <img src={AMM} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="tall">
    <img src={AMM} alt='' className="masonry" />
	</div>
	<div className="big">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
    <img src={AMM} alt='' className="masonry" />
	</div>
	<div className="wide">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="big">
    <img src={AMM} alt='' className="masonry" />
	</div>
	<div className="tall">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="wide">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="wide">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="wide">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="big">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="big">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="tall">
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div>
		<img src={Water} alt='' className="masonry" />
	</div>
	<div className="wide">
		<img src={Water} alt='' className="masonry" />
	</div>
    
</div>
<Footer/>
</main>



</>
  );
};

export default FPV;

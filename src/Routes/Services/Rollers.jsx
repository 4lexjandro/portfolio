// Rollers.jsx

import Water from '../../Visuals/Water.JPG'; // Importing an example image
import AMM from '../../Visuals/AMM.png'; // Importing an example image
import Roll1 from '../../Visuals/Rollers/Roll1.MOV';
import Roll2 from '../../Visuals/Rollers/Roll2.MOV';
import Roll3 from '../../Visuals/Rollers/Roll3.MOV';
import Roll8 from '../../Visuals/Rollers/Roll8.MOV';
import Footer from '../../Parts/Footer'

// Define your array of images

const Rollers = () => {
  return (
    <>
    
    <main className='contextt'>
    <br/><br/><br/><br/><br/>
    <div className="grid-wrapper">
	<div>
	<video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"

      >
        <source
          src={Roll3}
          type="video/mp4"
        />
        </video>
	</div>
	<div>
	<video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"

      >
        <source
          src={Roll2}
          type="video/mp4"
        />
        </video>
	</div>


    <video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"

      >
        <source
          src={Roll1}
          type="video/mp4"
        />
        </video>


	<div className="tall">
	<video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"

      >
        <source
          src={Roll8}
          type="video/mp4"
        />
        </video>
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

export default Rollers;




import Vid1 from '../../Visuals/Airvids/Vid1.MOV';
import Vid2 from '../../Visuals/Airvids/Vid2.MOV';
import Vid3 from '../../Visuals/Airvids/Vid3.MOV';
import Vid4 from '../../Visuals/Airvids/Vid4.MOV';
import Footer from '../../Parts/Footer'

// Define your array of images

const Airvid = () => {
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
          src={Vid1}
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
          src={Vid2}
          type="video/mp4"
        />
        </video>
	</div>


   






	<div className="tall">
		
	<video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"
      >
        <source
          src={Vid3}
          type="video/mp4"
        />
        </video>
	</div>
	<div className="wide">
	<video autoPlay loop muted playsInline={true} 
      controls={false}
      disablePictureInPicture={true} 
      id='video' className="vid"
      >
        <source
          src={Vid4}
          type="video/mp4"
        />
        </video>
	</div>
	<div>
		
	</div>
	<div className="tall">
    
	</div>
	<div className="big">
		
	</div>
	<div>
    
	</div>
	<div className="wide">
		
	</div>
	<div className="big">
    
	</div>
	<div className="tall">
		
	</div>
	<div>
		
	</div>
	<div>
		
	</div>
	<div>
		
	</div>
	<div>
		
	</div>
	<div className="wide">
		
	</div>
	<div>
		
	</div>
	<div>
		
	</div>
	<div className="wide">
		
	</div>
	<div>
		
	</div>
	<div className="wide">
		
	</div>
	<div className="big">
		
	</div>
	<div>
		
	</div>
	<div>
		
	</div>
	<div className="big">
		
	</div>
	<div className="tall">
		
	</div>
	<div>
		
	</div>
	<div>
		
	</div>
	<div className="wide">
		
	</div>
    
</div>
<Footer/>
</main>



</>
  );
};

export default Airvid;

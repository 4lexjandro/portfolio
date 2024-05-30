
import Video from '../../Visuals/Video.MP4';
import Footer from '../../Parts/Footer'
import Pic1 from '../../Visuals/Airpics/Pic1.png';
import Pic2 from '../../Visuals/Airpics/Pic2.jpg';
import Pic3 from '../../Visuals/Airpics/Pic3.png';
import Pic4 from '../../Visuals/Airpics/Pic4.JPG';
import Pic5 from '../../Visuals/Airpics/Pic5.JPG';
import Pic6 from '../../Visuals/Airpics/Pic6.jpg';
import Pic7 from '../../Visuals/Airpics/Pic7.JPG';
import Pic8 from '../../Visuals/Airpics/Pic8.JPG';
import Pic9 from '../../Visuals/Airpics/Pic9.JPG';
import Pic10 from '../../Visuals/Airpics/Pic10.JPG';
import Pic12 from '../../Visuals/Airpics/Pic12.JPG';
import Pic13 from '../../Visuals/Airpics/Pic13.JPG';
import Pic14 from '../../Visuals/Airpics/Pic14.JPG';



// Define your array of images

const Air = () => {
  return (
    <>
    
    <main className='contextt'>
    <br/><br/><br/><br/><br/>
    <div className="grid-wrapper">
	


	<div className="tall">
		<img src={Pic1} alt='' className="masonry" />
	</div>
	<div className="wide">
    <img src={Pic2} alt='' className="masonry" />
	</div>
	<div>
		<img src={Pic3} alt='' className="masonry" />
	</div>
	
	<div className="big">
		<img src={Pic4} alt='' className="masonry" />
	</div>
	
	<div className="wide">
		<img src={Pic5} alt='' className="masonry" />
	</div>
	<div className="big">
    <img src={Pic7} alt='' className="masonry" />
	</div>
	<div className="tall">
		<img src={Pic6} alt='' className="masonry" />
	</div>
	<div>
		<img src={Pic8} alt='' className="masonry" />
	</div>
	<div>
		<img src={Pic9} alt='' className="masonry" />
	</div>
	<div>
		<img src={Pic10} alt='' className="masonry" />
	</div>
	
	<div className="wide">
		<img src={Pic12} alt='' className="masonry" />
	</div>
	<div>
		<img src={Pic13} alt='' className="masonry" />
	</div>
	<div>
		<img src={Pic14} alt='' className="masonry" />
	</div>
	
	
    
</div>
<Footer/>
</main>



</>
  );
};

export default Air;

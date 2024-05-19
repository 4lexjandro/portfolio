
import Footer from '../Parts/Footer'
import SliderComponent from '../Parts/SliderComponent'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'
import frontapple from '../Visuals/img/front_apple_002.png'
import bottleapple from '../Visuals/img/bottle_apple_002.png'
import backapple from '../Visuals/img/back_apple_002.png'
import frontgrape from '../Visuals/img/front_grapes_001.png'
import bottlegrape from '../Visuals/img/bottle_grapes_001.png'
import backgrape from '../Visuals/img/back_grapes_001.png'
import backstraw from '../Visuals/img/back_strawberry_003.png'
import frontstraw from '../Visuals/img/front_strawberry_003.png'
import bottlestraw from '../Visuals/img/bottle_strawberry_003.png'
import AM from '../Visuals/AMM.png'





export const Services = () => {


  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }
  return (
    
   <>
   
     <div className='contextt'>

  













      
    
      
   
  
    </div>
    <Footer />
    </>
    
  )
}

export default Services



// <section className="page-wrapper" id="wannabedev">

// <div className="slider">
  
//   <ul className="slider-list">
    
//     <li className="slider-list__item slider-list__item_active">
//       <span className="back__element">
//         <img alt='' src={backapple} />
//       </span>
//       <span className="main__element">
//         <img alt='' src={bottleapple} />
//       </span>
//       <span className="front__element">
//         <img alt='' src={frontapple} />
//       </span>
//       <span className="title__element">
//         <span className="title">apple</span>
//       </span>
//       <span className="more__element">
//         <span className="content">
//           <span className="headline">apple</span>
//           <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
//           <span className="link">
//             <div className="fill"></div>
//             <a href="/" alt=''>Open catalog</a>
//           </span>
//         </span>
//       </span>
//      </li>


//      <li className="slider-list__item">
//       <span className="back__element">
//       <img alt='' src={backgrape} />
//       </span>
//       <span className="main__element">
//         <img alt='' src={bottlegrape} />
//       </span>
//       <span className="front__element">
//         <img alt='' src={frontgrape} />
//       </span>
//       <span className="title__element">
//         <span className="title">grapes</span>
//       </span>
//       <span className="more__element">
//         <span className="content">
//           <span className="headline">grapes</span>
//           <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
//           <span className="link">
//             <div className="fill fill-dark"></div>
//             <a href="#">Open catalog</a>
//           </span>
//         </span>
//       </span>
//      </li>
//      <li className="slider-list__item">
//       <span className="back__element">
//       <img alt='' src={backgrape} />
//       </span>
//       <span className="main__element">
//         <img alt='' src={bottlegrape} />
//       </span>
//       <span className="front__element">
//         <img alt='' src={frontgrape} />
//       </span>
//       <span className="title__element">
//         <span className="title">grapes</span>
//       </span>
//       <span className="more__element">
//         <span className="content">
//           <span className="headline">grapes</span>
//           <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
//           <span className="link">
//             <div className="fill fill-dark"></div>
//             <a href="#">Open catalog</a>
//           </span>
//         </span>
//       </span>
//      </li>
//      <li className="slider-list__item">
//       <span className="back__element">
//       <img alt='' src={backgrape} />
//       </span>
//       <span className="main__element">
//         <img alt='' src={AM} />
//       </span>
//       <span className="front__element">
//         <img alt='' src={frontgrape} />
//       </span>
//       <span className="title__element">
//         <span className="title">FPV Drone</span>
//       </span>
//       <span className="more__element">
//         <span className="content">
//           <span className="headline">grapes</span>
//           <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
//           <span className="link">
//             <div className="fill fill-dark"></div>
//             <a href="#">Open catalog</a>
//           </span>
//         </span>
//       </span>
//      </li>




//      <li className="slider-list__item">
//       <span className="back__element">
//       <img alt='' src={backstraw} />
//       </span>
//       <span className="main__element">
//         <img alt='' src={bottlestraw} />
//       </span>
//       <span className="front__element">
//         <img alt='' src={frontstraw} />
//       </span>
//       <span className="title__element">
//         <span className="title">strawberry</span>
//       </span>
//       <span className="more__element">
//         <span className="content">
//           <span className="headline">strawberry</span>
//           <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
//           <span className="link">
//               <div className="fill"></div>
//             <a href="#">Open catalog</a>
//           </span>
//         </span>
//       </span>
//      </li>


//      </ul>
  
//   <div className="slider__nav-bar">
//     <a alt='' className="nav-control"></a>
//     <a alt='' className="nav-control"></a>
//     <a alt='' className="nav-control"></a>
//     <a alt='' className="nav-control"></a>
//     <a alt='' className="nav-control"></a>
//   </div>
  
//   <div className="slider__controls">
//     <a alt='' className="slider__arrow slider__arrow_prev"></a>
//     <a alt='' className="slider__arrow slider__arrow_next"></a>
//   </div>

// </div> 

// </section>
// <SliderComponent/>

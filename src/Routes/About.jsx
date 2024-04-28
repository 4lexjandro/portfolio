import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'
import RAW from '../Visuals/RAW.DNG'




export const About = () => {

  const [loading] = useState(false)


  if (loading) {
    return <Spinner />
  }
  return (
    <>
    <main className='about'>
    {/* <img src={RAW} className='aboutpic' alt='helmet'/>
      <h1>About Us</h1>
      <p> My name is Alex, and I love capturing moments in time through the lens of my drones whether that is a photo or video.</p>
      <p> I’ve always wanted to fly, so I decided to buy a dii mini 3 pro since I was fascinated by its capabilities. When I launched it for the first time and flew out into the Hudson River, life was never the same to me. I have been flying since, trying to see the world in a completely new way, from above. I specifically enjoy capturing content of vehicles, their mechanical operation, their speed and power, their engaging appearance, and the sound of when they takeoff.  </p>
      <p>  Moments in time are so precious. They can be the moment you married your significant other, spent quality time with someone not knowing it would be the last, played with your children or pets knowing they are only this age once, celebrating your own achievements The list is endless.
These moments can also be quite unfortunate and may be with people, places, or objects that will no longer be in our lives. 
But, these moments shape us to be who we are today.</p>
      <p> Due to my awful memory of my own past, reminiscing for me is cloudy until I look at my gallery. That is when my memories emerge and are transparent. My soul feels content as I now can reminisce clearly about the past since I cannot relive it. Whether you have good or bad memory, you cannot relive the past. The closest we get to that would be through our gallery. Sometimes we cannot live in our moment to the fullest since we desire to capture it ourselves. I want you to live in your moment while I capture every second of it knowing one day you will enjoy these time capsules showcasing the magic you have experienced.  </p>
      <p> For those who desire their moments captured, whether it is on foot or from an aerial view, contact me, I would love to capture your magic. 
I’m based out in New York. However, I love to travel to create new content, to meet amazing people, witness the world go on, and gain the experiences that I will cherish for my own memories.
  </p> */}
      


  
    </main>



    
      
         
        



         

          
         
{/* <div className="bottom"> 
      <Footer />
   </div> */}


   
      
      </>

  )
}

export default About

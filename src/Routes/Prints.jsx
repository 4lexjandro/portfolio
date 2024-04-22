
import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'


export const Prints = () => {


  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }
  return (
    
   
    <>
    <br/><br/><br/><br/><br/><br/>
      <div className='hero'>
       
      <h1>Coming Soon</h1>
      
       <div className="bottom"> 
       <Footer />
    </div>
   
     </div>
     </>
    
  )
}

export default Prints
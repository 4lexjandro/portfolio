import Footer from '../Parts/Footer'
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'



const WorkPage = () => {

  const [loading] = useState(false)
    

  if (loading) {
    return <Spinner />
  }
  return (
    <>

<br/><br/><br/><br/><br/><br/><br/><br/>

<main className="hero">



   <h1>Coming Soon</h1>



  
  </main>
  <div className="bottom"> 
      <Footer />
   </div>

    </>
  )
}

export default WorkPage
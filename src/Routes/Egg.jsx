import React from 'react'
import Galaxy from '../Parts/Galaxy.jsx'
import Footer from '../Parts/Footer'

const Egg = () => {
  return (
    <>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="text">
    <h1>Easter Egg</h1>
    
    <p>You found this secret page!</p>
    </div>

    <Galaxy/>
    <div className="bottom"> 
      <Footer />
    </div>
    </>
  )
}

export default Egg
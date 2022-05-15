import Social from './Social'


function Footer() {
    const footerYear = new Date().getFullYear()




  return (
    
    
    <footer className='footer p-0 bg-cyan-900 shadow-xl shadow-cyan-600/20 
    text-primary-content footer-center '>
      
    
      <div className="bar">
      <p></p>
      <Social />
       
        
       

    </div>
    </footer>
  )
}

export default Footer
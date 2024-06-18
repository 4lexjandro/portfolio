import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
// import WorkPage from './Routes/WorkPage'
import NotFound from './Routes/NotFound'
import Test from './Routes/Test'

import Services from './Routes/Services'
import Prints from './Routes/Prints'
import Air from './Routes/Services/Air'
import Airvid from './Routes/Services/Airvid'
import Groundpic from './Routes/Services/Groundpic'
import Groundvid from './Routes/Services/Groundvid'
import FPV from './Routes/Services/FPV'
import Rollers from './Routes/Services/Rollers'
import Bar from './Parts/Bar'
import Spinner from './Parts/Spinner'
import ScrollToTop from './Parts/ScrollToTop'
import './style.css';
import { useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import 'lightbox.js-react/dist/index.css'






function App() {

  const [loading] = useState(false)
  if (loading) {
    return <Spinner />
  }
  
  return (
    <>
    
    
    
   
    <Router>
   <Bar/>
   <ScrollToTop/>
   
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/services' element={<Services />} />
     <Route path='/prints' element={<Prints />} />
     <Route path='/test' element={<Test />} />
     
     
     {/* <Route path='/work' element={<WorkPage />} /> */}
     <Route path='/contact' element={<Contact />} />
     <Route path='/notfound' element={<NotFound />} />
     <Route path='/*' element={<NotFound />} />
     <Route path='/airpic' element={<Air />} />
     <Route path='/airvid' element={<Airvid />} />
     <Route path='/groundpic' element={<Groundpic />} />
     <Route path='/groundvid' element={<Groundvid />} />
     <Route path='/fpv' element={<FPV />} />
     <Route path='/rollers' element={<Rollers />} />
     </Routes>
   </Router> 


   

   
   </>
  );
}

export default App;

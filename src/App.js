import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Work from './Routes/Work'
import NotFound from './Routes/NotFound'
import Bar from './Parts/Bar'



import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    
    
    
    
   <Router>
   <Bar/>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/work' element={<Work />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/notfound' element={<NotFound />} />
     <Route path='/*' element={<NotFound />} />
     </Routes>
   </Router>
   
   </>
  );
}

export default App;

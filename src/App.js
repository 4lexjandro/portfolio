import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import NotFound from './Routes/NotFound'

import './App.css';

function App() {
  return (
    
   <Router>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/notfound' element={<NotFound />} />
     <Route path='/*' element={<NotFound />} />
     </Routes>
   </Router>
  );
}

export default App;

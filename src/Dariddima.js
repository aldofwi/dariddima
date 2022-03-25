
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home     from './pages/Home';
import Beats    from './pages/Beats';
import Pricing  from './pages/Pricing';
import About    from './pages/About';
import Contact  from './pages/Contact';


function Dariddima() {

  return (

    <Router>

      <Navbar />

      <Routes>
        <Route path='/' exact   element={<Home />} />
        <Route path='/beats'    element={<Beats />} />
        <Route path='/pricing'  element={<Pricing />} />
        <Route path='/about'    element={<About />} />
        <Route path='/contact'  element={<Contact />} />
      </Routes>

    </Router>

  );

}

export default Dariddima;

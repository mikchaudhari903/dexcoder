
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/user/Home';
import AboutUs from './components/user/About';
import Contactus from './components/user/contact';
import Signin from './components/user/Sign-in';
import Signup from './components/user/Sign-up';

function App() {
  return (
    <Router>
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

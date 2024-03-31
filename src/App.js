import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotel from './Pages/Hotel';
import Transport from './Pages/Transport';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Destination from './Pages/Destination';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Home /></>} />
          <Route path="/about" element={<><Navbar/><About /></>} />
          <Route path="/contact" element={<><Navbar/><Contact /></>} />
          <Route path="/destination" element={<><Navbar/>< Destination/></>} />
          <Route path="/transport" element={<><Navbar/><Transport /></>} />
          <Route path="/hotel" element={<><Navbar/><Hotel /></>} />
          <Route path="/signup" element={<><SignUp/></>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

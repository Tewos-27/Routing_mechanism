import React from 'react'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import {Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
const App = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/product' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
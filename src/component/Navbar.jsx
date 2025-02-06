import React from 'react';
import logo from '../assets/street_logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
       <Link to='/home'><img src={logo} alt="" width="300px" /></Link> 

        <ul>
           <Link to='/home'><li>Home</li></Link>
           <Link to='/product'><li>Product</li></Link>
           <Link to='/contact'><li>Contact</li></Link>
           <Link to='/about'><li>About</li></Link>
        </ul>
     <button>Get Start</button>
    </div>
  )
}

export default Navbar
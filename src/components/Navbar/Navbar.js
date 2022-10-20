import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import img from "../../Assets/images/Logo.png";
import "./navbar.scss";

const Navbar = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    <div className="navbarPage">
      <div className="header">
        <Link to="/"><img className="logo" src={img} alt={img} /></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={25} style={{color: '#fff'}} />) : (<FaBars size={25} style={{color: '#fff'}} />)}
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
     <title>FoodBank</title>
    </div>
    <ul className='app__navbar-links'>
     <li className='p__opensans'>
      <a href='#home'>Home</a>
     </li>
     <li className='p__opensans'>
      <a href='#about'>About</a>
     </li>
     <li className='p__opensans'>
      <a href='#menu'>Programs</a>
     </li>
    </ul>
    <ul className='navbar-nav-right'>
     <li>
      <button className='btn btn-dark-outline'>Volunteer</button>
     </li>
     <li>
      <button className='btn btn-dark'>Donate</button>
     </li>
    </ul>

    <div className='app__navbar-smallscreen'>
     <FaBars color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
     {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
       <FaTimes
        fontSize={27}
        className='overlay__close'
        onClick={() => setToggleMenu(false)}
       />
       <ul className='app__navbar-smallscreen_links'>
        <li>
         <a href='/' onClick={() => setToggleMenu(false)}>
          Home
         </a>
        </li>
        <li>
         <a href='/' onClick={() => setToggleMenu(false)}>
          About
         </a>
        </li>
        <li>
         <a href='/' onClick={() => setToggleMenu(false)}>
          Programs
         </a>
        </li>
       </ul>

       <div class='mobile-menu-bottom'>
        <button className='btn btn-dark-outline'>Volunteer</button>
        <button className='btn btn-dark'>Donate</button>
       </div>
      </div>
     )}
    </div>
   </nav>
  );
};

export default Navbar;
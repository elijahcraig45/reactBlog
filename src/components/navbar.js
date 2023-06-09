import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul style={{ listStyle: 'none', display: 'flex' }} className='navbarlist'>
        <li style={{ marginRight: '15px' }}>
          <NavLink exact to="/reactBlog" activeclassname="active" className="nav-link">Home</NavLink>
        </li>
        <li style={{ marginRight: '15px' }}>
          <NavLink to="/blog" activeclassname="active" className="nav-link">Blog</NavLink>
        </li>
        <li style={{ marginRight: '15px' }}>
          <NavLink to="/weather" activeclassname="active" className="nav-link">Weather</NavLink>
        </li>
        <li style={{ marginRight: '15px' }}>
          <NavLink to="/impossible" activeclassname="active" className="nav-link">Impossible List</NavLink>
        </li>
        <li style={{ marginRight: '15px' }}>
          <NavLink to="/about" activeclassname="active" className="nav-link">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Our Food Website</h1>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <button className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <nav className="navbar">
        <NavLink className='home-link' to="/">
          <img className='logo-image' src={require('../assets/img/heartbeat.png')} alt="logo" />
          <h3 className="site-name">Glucomo</h3>
        </NavLink>
        <div className="burgar-icon" onClick={handleClick}>
          <i className={`fas ${clicked ? 'fa-times' : 'fa-bars'}`} />
        </div>
        <ul className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
          <li className="nav-item">
            <NavLink className='nav-link' to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link btn' role="button" to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
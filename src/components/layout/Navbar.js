import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/felt-teachers-logo.png';
import Hamburger from '../../Hamburger';
import Close from '../../Close';

const Navbar = (props) => (

    <nav>
      {/* <NavLink className="link" to="/"><img className="logo" src={logo} alt="" /></NavLink> */}
      <div className='nav_flex'>
        <div className='logoImage'><NavLink className="link" to="/"><img className="logo" src={logo} alt="" /></NavLink> </div>
        <NavLink className="nav_link" activeClassName='current' to="/">Home</NavLink>
        <div className='spanlink'>
       
        <NavLink className="nav_link" activeClassName='current' to="/signin">Login</NavLink>
        <NavLink className="nav_link" activeClassName='current' to="/signup" >Signup</NavLink>
        </div>
      </div>
      <Hamburger />
      <Close />
      <ul className="nav-list">
        <li className="nav-item"><NavLink className="link" to="/">{props.home}</NavLink></li>
        <li className="nav-item"><NavLink className="link" to="/Signup">{props.signup}</NavLink></li>
        <li className="nav-item"><NavLink className="link" to="/signin">{props.signin}</NavLink></li>
<li className="nav-item"><NavLink className="link" to="/" onClick={() => localStorage.removeItem('token')}>{props.signout}</NavLink></li>
      </ul>
    </nav>
);

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.jpg";

function NavBar(props) {

  return(
    <div className='navBar'>
      <h1 className='navBar__title'>
        <NavLink to="/">
          <img className="navBar__logo" alt="rob cartoon" src={logo} />
        </NavLink>
      </h1>
      
      <ul className='navBar__links'>
        <li className="navBar__link--wrapper">
          <NavLink to="/portraits" className="navBar__link" activeClassName="navBar__link--active">Portraits</NavLink>
        </li>
        <li className="navBar__link--wrapper">
          <NavLink to="/illustrations" className="navBar__link" activeClassName="navBar__link--active">Illustrations</NavLink>
        </li>
        <li className="navBar__link--wrapper">
          <NavLink to="/photoEditing" className="navBar__link" activeClassName="navBar__link--active">Photo Editing</NavLink>
        </li>
        <li className="navBar__link--wrapper">
          <NavLink to="/logos" className="navBar__link" activeClassName="navBar__link--active">Logos</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
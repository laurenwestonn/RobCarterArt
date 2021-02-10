import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.jpg";

function NavBar(props) {

  return(
    <div className='navBar'>
      <h1 className='navBar__title'>
        <Link to="/">
          <img class="navBar__logo" alt="rob cartoon" src={logo} />
        </Link>
      </h1>
      
      <ul className='navBar__links'>
        <li className="navBar__link--wrapper">
          <Link to="/" className="navBar__link">Portraits</Link>
        </li>
        <li className="navBar__link--wrapper">
          <Link to="/illustrations" className="navBar__link">Illustrations</Link>
        </li>
        <li className="navBar__link--wrapper">
          <Link to="/photoEditing" className="navBar__link">Photo Editing</Link>
        </li>
        <li className="navBar__link--wrapper">
          <Link to="/logos" className="navBar__link">Logos</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
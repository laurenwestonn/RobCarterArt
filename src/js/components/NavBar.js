import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.jpg";

function NavBar(props) {

  return(
    <div className='navBar'>
      <h1 className='navBar__title'>
        <Link to="/">
          <img alt="rob cartoon" src={logo} />
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
          <Link to="/" className="navBar__link">Commissions</Link>
        </li>
        <li className="navBar__link--wrapper">
          <Link to="/" className="navBar__link">Photo edits</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
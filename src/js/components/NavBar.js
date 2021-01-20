import React from "react";
import { Link } from "react-router-dom";
import robCartoon from "../../images/robCartoon.jpg";

function NavBar(props) {

  return(
    <div className='navBar'>
      <h1 className='navBar__title'><Link to="/">ROB CARTER ART</Link></h1>
      <img className="robCartoon" alt="rob cartoon" src={robCartoon} />
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
import React from "react";
import { Link } from "react-router-dom";
import robCartoon from "../../images/robCartoon.jpg";

function NavBar(props) {
  return(
    <div className='navBar'>
      <h1 className='navBar__title'><Link to="/">ROB CARTER ART</Link></h1>
      <img className="robCartoon" alt="rob cartoon" src={robCartoon} />
      <ul className='navBar__links'>
        <li>
          <Link to="/">Portraits</Link>
        </li>
        <li>
          <Link to="/illustrations">Illustrations</Link>
        </li>
        <li>
          <Link to="/half/rsvp">Commissions</Link>
        </li>
        <li>
          <Link to="/half/schedule">Photo edits</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
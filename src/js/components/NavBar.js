import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return(
    <div className='navBar'>
      <h1>ROB CARTER ART</h1>
      
      <ul className='navBar__links'>
        <li>
          <Link to="/">Pet portraits</Link>
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
        <li>
          <Link to="/half/gifts">Contact me</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
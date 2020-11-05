import React from 'react';
import NavBar from "../components/NavBar";
import Content from "./Content";
import Illustrations from "../pages/Illustrations";
import { Route } from "react-router-dom";

function Homepage() {
  return(
    <div className="homepage">
      <NavBar />
      <Route exact={true} path="/" component={Content} />
      <Route exact={true} path="/Illustrations" component={Illustrations} />
    </div>
  )
}

export default Homepage
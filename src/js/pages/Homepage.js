import React from 'react';
import NavBar from "../components/NavBar";
import Portraits from "./Portraits";
import Illustrations from "../pages/Illustrations";
import Logos from "../pages/Logos";
import PhotoEditing from "../pages/PhotoEditing";
import { Route } from "react-router-dom";

function Homepage() {
  return(
    <div className="homepage">
      <NavBar />
      <Route exact={true} path="/" component={Portraits} />
      <Route exact={true} path="/Portraits" component={Portraits} />
      <Route exact={true} path="/Illustrations" component={Illustrations} />
      <Route exact={true} path="/Logos" component={Logos} />
      <Route exact={true} path="/PhotoEditing" component={PhotoEditing} />
    </div>
  )
}

export default Homepage
import React from "react";
import Content from './Content';
import robCartoon from "../../images/robCartoon.jpg";


function Illustrations(props) {
  return (
    <Content title="Illustrations" images={[robCartoon, robCartoon, robCartoon, robCartoon, robCartoon]} />
  )
}

export default Illustrations;
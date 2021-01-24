import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import robCartoon from "../../images/robCartoon.jpg";
function Content(props) {
  const columnsCountBreakPoints = { 350: 2, 768: 2, 900: 3, 1024: 4 };
  return (
    <div className='content'>
      <h3>{props.title}</h3>

      <div className="backgroundDecoration">
        <div className="backgroundDecoration__thin"></div>
        <div className="backgroundDecoration__thick"></div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={14}>
          {props.images && props.images.map(image => {
            return <img className="masonry-image" src={image} alt={props.title} />
          })}
          <div className="item square"></div>
          <div className="item rectangle"></div>
          <div className="item square"></div>
          <div className="item rectangle"></div>
          <div className="item rectangle"></div>
          <div className="item rectangle"></div>
          <div className="item rectangle"></div>
          <div className="item square"></div>
          <div className="item rectangle"></div>
          <div className="item square"></div>
          <div className="item square"></div>
          <div className="item rectangle"></div>
          <div className="item rectangle"></div>
          <div className="item square"></div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Content;
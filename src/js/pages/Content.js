import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Content(props) {
  const columnsCountBreakPoints = { 350: 2, 768: 2, 900: 3, 1024: 4 };
  var i = 0;
  return (
    <div className='content'>
      <h3>{props.title}</h3>

      <div className="backgroundDecoration">
        <div className="backgroundDecoration__thin"></div>
        <div className="backgroundDecoration__thick"></div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={"14px"}>
          {props.images && props.images.map(image => {
            i++
            return <img className="masonry-image" src={image} alt={props.title} key={i} />
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Content;
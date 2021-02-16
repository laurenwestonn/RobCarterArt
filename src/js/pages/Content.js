import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "../components/Modal";

function Content(props) {
  const columnsCountBreakPoints = { 350: 2, 768: 2, 900: 3, 1024: 4 };
  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(props.images[0]);

  const imageOnClick = (image) => {
    setShowModal(true);
    setClickedImage(image);
  }

  return (
    <div className="content">
      <div className="content-grid">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter={"10px"}>
            {props.images && props.images.map((image, i) => {
              return <img className="masonry-image" src={image} alt={props.title} key={i} onClick={() => imageOnClick(image)}/>
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="backgroundDecoration">
        <div className="backgroundDecoration__thin"></div>
        <div className="backgroundDecoration__thick"></div>
      </div>
      
      <Modal 
        showModal={showModal}
        image={clickedImage}
        closeModal={() => setShowModal(false)}
      />
    </div>
  )
}

export default Content;
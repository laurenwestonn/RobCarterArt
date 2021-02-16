import React from "react";

function Modal(props) {
    return (
      props.showModal ?
      <div onClick={props.closeModal} className="modal">
        <img className="modal-image" src={props.image} />
      </div>
      : null
    )
}

export default Modal;
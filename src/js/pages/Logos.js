import React from "react";
import Content from './Content';
import CateringLogoPT3 from "../../images/Logos/CateringLogoPT3.jpg";
import CateringLogoPT4 from "../../images/Logos/CateringLogoPT4.jpg";
import CKC01 from "../../images/Logos/CKC01.jpg";
import CKC02 from "../../images/Logos/CKC02.jpg";
import LOGOpage01 from "../../images/Logos/LOGOpage01.jpg";


function Logos(props) {
  let logos = [ CateringLogoPT3, CateringLogoPT4, CKC01, CKC02, LOGOpage01 ]

  return (
    <Content title="Logos" images={logos} />
  )
}

export default Logos;
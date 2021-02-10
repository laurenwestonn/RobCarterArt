import React from "react";
import Content from './Content';
import batman from "../../images/Illustrations370pxl/BATMAN.jpg";
import BigQuent from "../../images/Illustrations370pxl/BigQuent.jpg";
import Bite from "../../images/Illustrations370pxl/Bite.jpg";
import Dom3 from "../../images/Illustrations370pxl/Dom3.jpg";
import FinishedPage from "../../images/Illustrations370pxl/FinishedPage-Zombie.jpg";
import GOTDT from "../../images/Illustrations370pxl/GOT-DT.jpg";
import HappyBirthdayBriony from "../../images/Illustrations370pxl/HappyBirthdayBriony.jpg";
import Hulk from "../../images/Illustrations370pxl/Hulk.jpg";
import JesusMJK from "../../images/Illustrations370pxl/JesusMJK.jpg";
import Kraven2 from "../../images/Illustrations370pxl/Kraven2.jpg";
import Mike from "../../images/Illustrations370pxl/Mike.jpg";
import Mysterio from "../../images/Illustrations370pxl/Mysterio.jpg";
import Punisher from "../../images/Illustrations370pxl/Punisher.jpg";
import RDR02 from "../../images/Illustrations370pxl/RDR02.jpg";
import Redemption03 from "../../images/Illustrations370pxl/Redemption03.jpg";
import Saul from "../../images/Illustrations370pxl/Saul.jpg";
import StrangerThings from "../../images/Illustrations370pxl/StrangerThings.jpg";
import TheJoker02 from "../../images/Illustrations370pxl/TheJoker02.jpg";
import Untitled from "../../images/Illustrations370pxl/Untitled-2.jpg";
import VampireFinalPage from "../../images/Illustrations370pxl/VampireFinalPage.jpg";
import Werewolffinalpage from "../../images/Illustrations370pxl/Werewolffinalpage.jpg";
import Witcher from "../../images/Illustrations370pxl/Witcher.jpg";
import WomanPaintedDesign from "../../images/Illustrations370pxl/WomanPaintedDesign.jpg";


function Illustrations(props) {
  let illustrations = [batman, BigQuent, Bite, Dom3, FinishedPage, GOTDT, HappyBirthdayBriony, Hulk, JesusMJK, Kraven2, Mike, Mysterio, Punisher, RDR02, Redemption03, Saul, StrangerThings, TheJoker02, Untitled, VampireFinalPage, Werewolffinalpage, Witcher, WomanPaintedDesign]
  return (
    <Content title="Illustrations" images={illustrations} />
  )
}

export default Illustrations;
import React from "react"
import Content from './Content'
import carter from "../../images/PhotoEditing/01.jpg"
import baby from "../../images/PhotoEditing/02.jpg"
import dogPortrait1 from "../../images/PhotoEditing/03.jpg"
import dogPortrait2 from "../../images/PhotoEditing/04.jpg"
import catPerson from "../../images/PhotoEditing/05.jpg"
import dogPerson from "../../images/PhotoEditing/06.jpg"
import dogVader from "../../images/PhotoEditing/07.jpg"
import dogCowboy from "../../images/PhotoEditing/08.jpg"
import dogMafia from "../../images/PhotoEditing/09.jpg"
import Fires02 from "../../images/PhotoEditing/Fires02.jpg"
import LogoFire from "../../images/PhotoEditing/LogoFire.jpg"
import fireplace1 from "../../images/PhotoEditing/Untitled-1.jpg"
import fireplace2 from "../../images/PhotoEditing/Untitled-2.jpg"
import fireplace3 from "../../images/PhotoEditing/Untitled-3.jpg"


function PhotoEditing(props) {
  let photoEditing = [ carter, baby, dogPortrait1, dogPortrait2, catPerson, dogPerson, dogVader, dogCowboy, dogMafia, Fires02, LogoFire, fireplace1, fireplace2, fireplace3 ]
  
  return (
    <Content title="PhotoEditing" images={photoEditing} />
  )
}

export default PhotoEditing;
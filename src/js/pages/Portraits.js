import React from 'react';
import Content from './Content';
import Anthony from '../../images/Portraits370pxl/Anthony.jpg';
import Ashleigh2 from '../../images/Portraits370pxl/Ashleigh2.jpg';
import Donna from '../../images/Portraits370pxl/Donna.jpg';
import Hamish from '../../images/Portraits370pxl/Hamish.jpg';
import Jacqueline from '../../images/Portraits370pxl/Jacqueline.jpg';
import Jacqueline02 from '../../images/Portraits370pxl/Jacqueline02.jpg';
import Jake from '../../images/Portraits370pxl/Jake.jpg';
import Julie01 from '../../images/Portraits370pxl/Julie01.jpg';
import Julie02 from '../../images/Portraits370pxl/Julie02.jpg';
import Pawprintswinner from '../../images/Portraits370pxl/Pawprintswinner.jpg';
import Pete from '../../images/Portraits370pxl/Pete.jpg';
import Rebecca from '../../images/Portraits370pxl/Rebecca.jpg';
import Sue from '../../images/Portraits370pxl/Sue.jpg';
import Tim from '../../images/Portraits370pxl/Tim.jpg';
import Tracey from '../../images/Portraits370pxl/Tracey.jpg';
import Vic01 from '../../images/Portraits370pxl/Vic01.jpg';
import Vic02 from '../../images/Portraits370pxl/Vic02.jpg';
import Vic03 from '../../images/Portraits370pxl/Vic03.jpg';
import Zoe from '../../images/Portraits370pxl/Zoe.jpg';

function Portraits(props) {
  var images = [Rebecca, Zoe, Julie01, Tim, Anthony, Ashleigh2, Pete, Hamish, Jacqueline, Jacqueline02, Jake, Julie02, Donna, Sue, Tracey, Vic01, Vic02, Vic03, Pawprintswinner];
  return (
    <Content title="Portraits" images={images}/>
  )
}

export default Portraits;

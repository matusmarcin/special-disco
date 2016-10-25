/**
*
* Slideshow
*
*/

import React from 'react';

import Carousel from 'nuka-carousel';
import bg1 from './slideshow/bg1.jpg';
import bg2 from './slideshow/bg2.jpg';
import bg3 from './slideshow/bg3.jpg';

function Slideshow() {
  return (
    <Carousel autoplay="true">
      <img alt="" src={bg2} />
      <img alt="" src={bg1} />
      <img alt="" src={bg3} />
    </Carousel>
  );
}

export default Slideshow;

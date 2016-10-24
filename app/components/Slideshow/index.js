/**
*
* Slideshow
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import bg2 from './slideshow/bg2.jpg';
import bg1 from './slideshow/bg1.jpg';
import bg3 from './slideshow/bg3.jpg';

var Carousel = require('nuka-carousel');

/*
var Decorators = [{
  component: React.createClass({
    render() {
      return (
          <button
              onClick={this.props.previousSlide}>
            Previous Slide
          </button>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20
  }
}];
*/
class Slideshow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <Carousel autoplay={true}>
      <img src={bg2}/>
      <img src={bg1}/>
      <img src={bg3}/>
    </Carousel>
    );
  }


}

export default Slideshow;

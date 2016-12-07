/**
*
* ToggleButton
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class ToggleButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.menu}>
        <ul>
          <li><Link to="/">ALL</Link></li>
          <li><Link to="/summer-collection/categories">SUMMER COLLECTION</Link></li>
          <li><Link to="/t-shirts/categories">T-SHIRTS</Link></li>
          <li><Link to="/hoodies-and-sweatshirts/categories">HOODIES</Link></li>
          <li><Link to="/shorts/categories">SHORTS</Link></li>
          <li><Link to="/polos/categories">POLOS</Link></li>
          <li><Link to="/sweaters/categories">SWEATERS</Link></li>
          <li><Link to="/jeans/categories">JEANS</Link></li>
          <li><Link to="/pants/categories">PANTS</Link></li>
        </ul>
      </div>
    );
  }
}

export default ToggleButton;

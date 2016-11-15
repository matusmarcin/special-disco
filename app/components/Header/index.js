/**
*
* Header
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import LogoImg from './images/clothesshop2.png';
import styles from './styles.css';

function Header() {
  return (
    <header className={styles.header} role="banner">
      <nav className={styles.navUser}>
        <ul className={styles.navUserSection}>
          <li><a href="">LINK</a></li>
          <li>
            <a href="">LOGIN</a>
            <span>&nbsp;&nbsp;or&nbsp;&nbsp;</span>
            <a href="">SIGN UP</a>
          </li>
          <li><a href="">CART</a></li>
        </ul>
      </nav>
      <div className={styles.headerLogo}>
        <a href=""><img alt="clothesshop" src={LogoImg} /></a>
      </div>
      <nav className={styles.navPages}>
        <ul className={styles.navPagesList} id="myTopnav">
          <li className={styles.navIcon}>
            <a href="">&#9776;</a>
          </li>
          <li><a href="">ALL</a></li>
          <li><a href="">SUMMER COLLECTION</a></li>
          <li><a href="">T-SHIRTS</a></li>
          <li><a href="">HOODIES</a></li>
          <li><a href="">SHORTS</a></li>
          <li><a href="">POLOS</a></li>
          <li><a href="">SWEATERS</a></li>
          <li><a href="">JEANS</a></li>
          <li><a href="">PANTS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

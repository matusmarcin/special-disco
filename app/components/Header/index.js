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
          <li><a href="">VSETKO</a></li>
          <li><a href="">TRICKA</a></li>
          <li><a href="">MIKINY</a></li>
          <li><a href="">KOSELE</a></li>
          <li><a href="">NOHAVICE</a></li>
          <li><a href="">LINK</a></li>
          <li><a href="">LINK</a></li>
          <li><a href="">LINK</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

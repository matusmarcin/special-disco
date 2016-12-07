/**
*
* Header
*
*/

import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import {
  toggleMenu,
} from 'containers/ShoppingCart/actions';
import {
  toggleButton,
} from 'containers/Toggle/actions';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import LogoImg from './images/clothesshop2.png';
import styles from './styles.css';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className={styles.header} role="banner">
        <nav className={styles.navUser}>
          <ul className={styles.navUserSection}>
              <a className="hvr-buzz" href="">LOGIN</a>
              <a className="hvr-buzz" href="">SIGN UP</a>
            <li><a className="hvr-buzz"
            <div className="animated bounceInDown">
              <li>
                <a href="">LOGIN</a>
                <span>&nbsp;&nbsp;or&nbsp;&nbsp;</span>
                <a href="">SIGN UP</a>
              </li>
              <li><a
                href="/cart"
                onClick={
                (event) => {
                  this.props.dispatch(toggleMenu());
                  event.preventDefault();
                }
              }
              >CART</a></li>
            </div>
          </ul>
        </nav>
        <div className="animated bounceInDown">
        <div className={styles.headerLogo}>
          <a href=""><img alt="clothesshop" src={LogoImg} /></a>
        </div>
        </div>
        <nav className={styles.navPages}>
          <ul className={styles.navPagesList}>
            <div className="animated bounceInUp">
              <li className={styles.navIcon}>
                <a href=""
                onClick={
                (event) => {
                  this.props.dispatch(toggleButton());
                  event.preventDefault();
                }
              }
              >&#x25BD;</a>
            </li>
            <li><Link to="/">ALL</Link></li>
            <li><Link to="/summer-collection/categories">SUMMER COLLECTION</Link></li>
            <li><Link to="/t-shirts/categories">T-SHIRTS</Link></li>
            <li><Link to="/hoodies-and-sweatshirts/categories">HOODIES</Link></li>
            <li><Link to="/shorts/categories">SHORTS</Link></li>
            <li><Link to="/polos/categories">POLOS</Link></li>
            <li><Link to="/sweaters/categories">SWEATERS</Link></li>
            <li><Link to="/jeans/categories">JEANS</Link></li>
            <li><Link to="/pants/categories">PANTS</Link></li>
          </div>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(Header);

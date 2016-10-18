/**
*
* Header
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LogoImg from './images/clothesshop2.png';
import styles from './styles.css';


function Header() {
  return (
    <header className={styles.header} role="banner">
    	<nav className={styles.navUser}>
    		<ul className={styles.navUserSection}>
    			<li className={styles.navUserItem}>
    				<a href="/">CART</a> 	
    			</li>
    			<li className={styles.navUserItem}>
    				<a href="/login">LOGIN</a><span className={styles.navUserOr}>or</span> 
    				<a href="/register"> SIGN UP</a> 
    			</li>
				<li className={styles.navUserItem}>
    				<a href="/">LINK</a> 	
    			</li>

    		</ul>
    	</nav>
    	<div className={styles.headerLogo}>
    		<a href="/"><img src={LogoImg}/></a>
    	</div>
   	
     
    </header>
  );
}

export default Header;

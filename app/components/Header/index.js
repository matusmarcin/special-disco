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
    			<li>
    				<a href="#">LINK</a> 	
    			</li>
    			<li >
    				<a href="#">LOGIN</a>
    					<span className={styles.navUserOr}>or</span> 
    				<a href="#"> SIGN UP</a> 
    			</li>
				
				<li >
    				<a href="#">CART</a> 	
    			</li>

    		</ul>
    	</nav>

    	<div className={styles.headerLogo}>
    		<a href="/"><img src={LogoImg}/></a>
    	</div>
   		<div className={styles.navPagesContainer}> 
   			<nav className={styles.navPages}>
    			<ul className={styles.navPagesList}>
  					<li><a href="#">VSETKO</a></li>
  					<li><a href="#">TRICKA</a></li>
  					<li><a href="#">MIKINY</a></li>
  					<li><a href="#">KOSELE</a></li>
  					<li><a href="#">NOHAVICE</a></li>
  					<li><a href="#">LINK</a></li>
  					<li><a href="#">LINK</a></li>
  					<li><a href="#">LINK</a></li>
				</ul>
    		</nav>

   		</div>
     
    </header>
  );
}

export default Header;

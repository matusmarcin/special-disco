/**
*
* Header
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LogoImg from './images/clothesshop2.png';
import LogoImgSmall from './images/clothesshop2_small.png';
import styles from './styles.css';


   function myFunction() {
   var x = document.getElementById("myTopnav");
    if (x.className === "navPagesList") {
        x.className += " responsive";
    } else {
        x.className = "navPagesList";
    }
}
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
    				<a href="#cart">CART</a> 	
    			</li>

    		</ul>
    	</nav>

    	<div className={styles.headerLogo}>
    		<a href="/"><img src={LogoImg}/></a>
    	</div>
    	<div className={styles.headerLogoSmall}>
    		<a href="/"><img src={LogoImgSmall}/></a>
    	</div>
   		<div className={styles.navPagesContainer}> 
   			<nav className={styles.navPages}>
    			<ul className={styles.navPagesList} id="myTopnav">
    				<li className={styles.navIcon}>
    					<a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
  					</li>
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

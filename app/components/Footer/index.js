/**
*
* Footer
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';


function Footer() {
  return (
     <footer className={styles.footer}>
    
        <p className="footer-text">Copyright © TUKE 2016 • All rights reserved.</p>

    </footer>
  );
}

export default Footer;
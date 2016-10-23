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
    
       <section>
          <p>
             <FormattedMessage {...messages.licenseMessage} />
         </p>


          <a href="http://twitter.com/minimalmonkey" className="icon-button twitter"><i className="icon-twitter"></i><span></span></a>
          <a href="http://facebook.com" className="icon-button facebook"><i className="icon-facebook"></i><span></span></a>
          <a href="http://plus.google.com" className="icon-button google-plus"><i className="icon-google-plus"></i><span></span></a>
       </section>


    </footer>
  );
}

export default Footer;
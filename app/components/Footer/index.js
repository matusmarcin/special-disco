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
  const year = new Date().getFullYear();
  return (
    <footer>
      <section>
        <a href="http://twitter.com/minimalmonkey" className={`${styles.iconButton} ${styles.twitter}`}><i className="fa fa-twitter"></i><span></span></a>
        <a href="http://facebook.com" className={`${styles.iconButton} ${styles.facebook}`}><i className="fa fa-facebook"></i><span></span></a>
        <a href="http://plus.google.com" className={`${styles.iconButton} ${styles.googlePlus}`}><i className="fa fa-google-plus"></i><span></span></a>
        <p>
          <FormattedMessage {...messages.licenseMessage} values={{ year }} />
        </p>
      </section>
    </footer>
  );
}

export default Footer;

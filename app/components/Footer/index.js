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
        <hr></hr>
        <h2>The yourney is the reward.</h2>
        <a href="http://twitter.com" className={`${styles.iconButton} ${styles.twitter}`}><i className="fa fa-twitter"></i><span></span></a>
        <a href="http://facebook.com" className={`${styles.iconButton} ${styles.facebook}`}><i className="fa fa-facebook"></i><span></span></a>
        <a href="http://plus.google.com" className={`${styles.iconButton} ${styles.googlePlus}`}><i className="fa fa-google-plus"></i><span></span></a>
        <p className="licence-text">
          <FormattedMessage {...messages.licenseMessage} values={{ year }} />
        </p>
      </section>

    </footer>
  );
}

export default Footer;

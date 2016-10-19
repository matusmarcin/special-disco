/**
*
* Footer
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

<<<<<<< HEAD

function Footer() {
  return (
    <footer className={styles.footer}>
     <p>© 2016. All rights reserved.</p>
    </footer>
=======
function Footer() {
  return (
    <div className={styles.footer}>
      <FormattedMessage {...messages.header} />
    </div>
>>>>>>> f22eed6dce43265487abcde03aaece7ae922cdec
  );
}

export default Footer;

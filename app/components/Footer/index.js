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
       </section>

    </footer>
  );
}

export default Footer;
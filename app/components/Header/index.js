/**
*
* Header
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Header;

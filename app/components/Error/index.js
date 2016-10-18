/**
*
* Error
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Error() {
  return (
    <div className={styles.error}>
      <FormattedMessage {...messages.text} />
    </div>
  );
}

export default Error;

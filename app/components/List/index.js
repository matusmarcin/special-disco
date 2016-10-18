/**
*
* List
*
*/

import React from 'react';

import styles from './styles.css';

function List(props) {
  const ComponentToRender = props.component;
  let content = null;

  // If we have items, render them
  if (props.items) {
    content = (
      <ul className={styles.list}>
        props.items.map((item, index) => (
          <li className={styles.listItem}>
            <ComponentToRender key={'item-${index}'} item={item} />
          </li>
        ));
      </ul>
    );
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    {content}
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;

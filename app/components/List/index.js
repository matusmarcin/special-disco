/**
*
* List
*
*/

import React from 'react';

import styles from './styles.css';

function List(props) {
  const ComponentToRender = props.component;

  // If we have items, render them
  if (props.items) {
    return (
      <ul className={styles.list}>
        {
          props.items.map((item, index) => (
            <li key={`item-${index}`} className={styles.listItem}>
              <ComponentToRender item={item} />
            </li>
          ))
        }
      </ul>
    );
  }

  // Otherwise render empty component
  return null;
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;

/**
*
* List
*
*/

import React from 'react';

function List(props) {
  const ComponentToRender = props.component;

  // If we have items, render them
  if (props.items) {
    return (
      <ul className={props.className}>
        {
          props.items.map((item, index) => (
            <li key={`item-${index}`}>
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
  className: React.PropTypes.string,
  items: React.PropTypes.array,
};

export default List;

/**
*
* ProductImage
*
*/

import React from 'react';
import { connect } from 'react-redux';

import {
  pickImage,
} from 'containers/ProductsPage/actions';

function ProductImage(props) {
  const item = props.item;
  const dispatch = props.dispatch;

  return (
    <a
      href={`/img/products/${item.img}`}
      onClick={(event) => {
        dispatch(pickImage(item.img));
        event.preventDefault();
      }}
    >
      <img src={`/img/products/${item.img}`} alt={item.name} />
    </a>
  );
}

ProductImage.propTypes = {
  item: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(ProductImage);

/**
*
* ProductImage
*
*/

import React from 'react';
import { connect } from 'react-redux';

import {
  pickImage,
} from '../../containers/ProductSpecs/actions';

function ProductImage(props) {
  const item = props.item;
  const dispatch = props.dispatch;

  return (
    <img src={`/img/products/${item.img}`} alt={item.name} onClick={() => dispatch(pickImage(item.img))} />
  );
}

ProductImage.propTypes = {
  item: React.PropTypes.object,
};

export default connect()(ProductImage);

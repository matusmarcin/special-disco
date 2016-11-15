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
    <a href="#" onClick={() => dispatch(pickImage(item.img))}><img src={`/img/products/${item.img}`} alt={item.name} /></a>
  );
}

ProductImage.propTypes = {
  item: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(ProductImage);

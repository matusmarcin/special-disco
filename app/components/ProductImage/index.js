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

export class ProductImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a
        href={`/img/products/${this.props.item.img}`}
        onClick={(event) => {
          this.props.dispatch(pickImage(this.props.item.img));
          event.preventDefault();
        }}
      >
        <img src={`/img/products/${this.props.item.img}`} alt={this.props.item.name} />
      </a>
    );
  }
}

ProductImage.propTypes = {
  item: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(ProductImage);

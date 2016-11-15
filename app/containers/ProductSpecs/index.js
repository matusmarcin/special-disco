/*
 *
 * ProductSpecs
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectImage,
  selectSize,
  selectCounter,
} from './selectors';

import {
  pickImage,
  pickSize,
  setCounter,
  increaseCounter,
  decreaseCounter,
} from './actions';

import ProductImage from 'components/ProductImage';
import List from 'components/List';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

export class ProductSpecs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.pickImage(JSON.parse(this.props.item.images)[0]);
  }

  render() {
    const item = this.props.item;

    let name = null;
    if (item.name.length > 13) {
      name = `${item.name.substring(0, 10)}...`;
    } else {
      name = item.name;
    }

    let categories = '';
    let json = JSON.parse(item.categories);
    for (let i = 0, len = json.length; i < len; i += 1) {
      categories += `${json[i]}, `;
    }

    let images = [];
    json = JSON.parse(item.images);
    for (let i = 0, len = json.length; i < len; i += 1) {
      images.push({
        img: json[i],
        name: name,
      });
    }

    let options = [];
    json = JSON.parse(item.categories);
    for (let i = 0, len = json.length; i < len; i += 1) {
      options.push({
        img: json[i],
        name: name,
      });
    }

    return (
      <div className={styles.productSpecs}>
        <div>
          <img src={`/img/products/${this.props.image}`} alt={name} />
          <List className={styles.imageList} items={images} component={ProductImage} />
        </div>
        <div>

          {categories.slice(0, -2)}
          <br/>
          <h2>{item.name}</h2>
          <hr/>
          <p>${item.price.toFixed(2)}</p>
          <hr/>

          <select>
            {
              JSON.parse(item.categories).map((item, index) => (
                <option value={index}>{item}</option>
              ))
            }
          </select>
          <hr/>
          <br/>
          <h3>Quantity:</h3>
          <button className={styles.button} onClick={() => this.props.decreaseCounter()}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <input className={styles.counter} value={this.props.counter} onChange={(event) => this.props.setCounter(event.target.value)} name="qty" type="tel" min="1" pattern="[0-9]*"/>
          <button className={styles.button} onClick={() => this.props.increaseCounter()}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </button>

          <button>

          </button>
        </div>
      </div>
    );
  }
}

ProductSpecs.propTypes = {
  item: React.PropTypes.object,
  image: React.PropTypes.string,
  size: React.PropTypes.string,
  counter: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    pickImage: (image) => dispatch(pickImage(image)),
    pickSize: (size) => dispatch(pickSize(size)),
    setCounter: (count) => dispatch(setCounter(count)),
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  image: selectImage(),
  size: selectSize(),
  counter: selectCounter(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSpecs);

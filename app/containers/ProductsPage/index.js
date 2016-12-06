/*
 *
 * ProductSpecs
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  decSizeCount,
} from 'containers/App/actions';

import {
  selectCategories,
  selectProducts,
} from 'containers/App/selectors';

import {
  selectProduct,
  selectImage,
  selectSize,
  selectCounter,
} from './selectors';

import {
  pickImage,
  pickSize,
  setProduct,
  decMaxCount,
  setCounter,
  increaseCounter,
  decreaseCounter,
} from './actions';

import {
    addItem,
} from 'containers/ShoppingCart/actions';

import ProductImage from 'components/ProductImage';
import List from 'components/List';

import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

export class ProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    let item;

    this.props.products.forEach((product) => {
      if (product.slug !== this.props.params.slug) {
        return;
      }

      const productCat = JSON.parse(product.categories);
      const data = [];

      productCat.forEach((id) => {
        const category = this.props.categories[id - 1];
        if (category !== undefined) {
          data.push({
            name: category.name,
            slug: category.slug,
          });
        }
      });

      item = {
        name: product.name,
        slug: product.slug,
        desc: product.desc,
        categories: data,
        images: product.images,
        price: product.price,
        sizes: product.sizes,
      };
    });

    this.props.setProduct(item);
    this.props.pickImage(item.images[0]);
    this.props.pickSize(item.sizes[0]);
  }

  render() {
    const item = this.props.product;
    if (!item) {
      return null;
    }

    let name = null;
    if (item.name.length > 13) {
      name = `${item.name.substring(0, 10)}...`;
    } else {
      name = item.name;
    }

    const categories = [];
    for (let i = 0, len = item.categories.length; i < len; i += 1) {
      const category = item.categories[i];
      categories.push(<Link key={i} to={`/${category.slug}/categories`}>{category.name}</Link>);
      categories.push(', ');
    }
    categories.pop();

    const images = [];
    for (let i = 0, len = item.images.length; i < len; i += 1) {
      images.push({
        img: item.images[i],
        name,
      });
    }

    const options = [];
    for (let i = 0, len = item.sizes.length; i < len; i += 1) {
      const size = item.sizes[i];
      options.push({
        name: size.name,
        count: size.count,
      });
    }

    return (
      <div className={styles.productSpecs}>
        <div className={styles.divImages}>
          <div className={styles.divBig}>
            <img src={`/img/products/${this.props.image}`} alt={name} />
          </div>
          <List className={styles.imageList} items={images} component={ProductImage} />
        </div>
        <div className={styles.divInfo}>
          {categories}
          <br />
          <h2>{item.name}</h2>
          <hr />
          <p>${item.price.toFixed(2)}</p>
          <hr />
          <select name="size" onChange={(event) => this.props.pickSize(options[event.target.value])}>
            {
              options.map((size, index) => (
                <option key={index} value={index}>{size.name}</option>
              ))
            }
          </select>
          <hr />
          <br />
          <h3><FormattedMessage {...messages.quantity} /></h3>
          <button className={styles.button} onClick={() => this.props.decreaseCounter()}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <input
            name="qty"
            type="tel"
            className={styles.counter}
            value={this.props.counter}
            onChange={
              (event) => this.props.setCounter(event.target.value)
            }
            min="1"
            pattern="[0-9]*"
          />
          <button className={styles.button} onClick={() => this.props.increaseCounter()}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </button>
          <br />
          <input
            type="submit"
            value="Add to Cart"
            className={styles.addToCart}
            onClick={
              () => {
                this.props.dispatch(addItem(item, this.props.size, this.props.counter));
                this.props.dispatch(decSizeCount(this.props.size, item.slug, this.props.counter));
                this.props.decMaxCount(this.props.counter);
              }
            }
          />
          <br />
          {item.desc}
        </div>
        <div className={styles.clear}>
        </div>
      </div>
    );
  }
}

ProductsPage.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  params: React.PropTypes.array,
  product: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  categories: React.PropTypes.array,
  products: React.PropTypes.array,
  image: React.PropTypes.string,
  size: React.PropTypes.string,
  counter: React.PropTypes.number,
  pickImage: React.PropTypes.func,
  pickSize: React.PropTypes.func,
  setProduct: React.PropTypes.func,
  decMaxCount: React.PropTypes.func,
  setCounter: React.PropTypes.func,
  increaseCounter: React.PropTypes.func,
  decreaseCounter: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    pickImage: (image) => dispatch(pickImage(image)),
    pickSize: (size) => dispatch(pickSize(size)),
    setProduct: (product) => dispatch(setProduct(product)),
    decMaxCount: (count) => dispatch(decMaxCount(count)),
    setCounter: (count) => dispatch(setCounter(count)),
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  product: selectProduct(),
  categories: selectCategories(),
  products: selectProducts(),
  image: selectImage(),
  size: selectSize(),
  counter: selectCounter(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

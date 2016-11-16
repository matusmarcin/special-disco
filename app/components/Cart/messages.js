/*
 * Cart Messages
 *
 * This contains all the text for the Cart component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.Cart.header',
    defaultMessage: 'Shopping Bag',
  },
  subtotal: {
    id: 'app.components.Cart.subtotal',
    defaultMessage: 'Subtotal',
  },
  message: {
    id: 'app.components.Cart.message',
    defaultMessage: 'There are no items in your shopping bag.',
  },
});

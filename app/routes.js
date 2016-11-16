// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  Promise.all([
    System.import('containers/ShoppingCart/reducer'),
  ]).then(([reducer]) =>
    injectReducer('shoppingCart', reducer.default)
  ).catch(errorLoading);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/Products/reducer'),
          System.import('containers/Products/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, reducer, sagas]) => {
          injectReducer('products', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/:slug/categories',
      name: 'categoriesPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/Products/reducer'),
          System.import('containers/Products/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, reducer, sagas]) => {
          injectReducer('products', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/:slug/products',
      name: 'productsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProductsPage/reducer'),
          System.import('containers/ProductsPage/sagas'),
          System.import('containers/ProductsPage'),
          System.import('containers/ProductSpecs/reducer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component, specs]) => {
          injectReducer('productsPage', reducer.default);
          injectReducer('productSpecs', specs.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

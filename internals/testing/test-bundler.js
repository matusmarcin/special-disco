// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
require('babel-polyfill');

// If we need to use Chai, we'll have already chaiEnzyme loaded
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());

// Include all .js files under `app`, except app.js, reducers.js, and routes.js.
// This is for code coverage
const context = require.context('../../app', true, /^^((?!(app|reducers|routes)).)*\.js$/);
context.keys().forEach(context);

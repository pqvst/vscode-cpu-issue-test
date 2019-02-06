const _ = require('lodash');
const Data = require('./data');

const AByB = _(Data).groupBy('b').mapValues(e => _.map(e, 'a')).value();
const AByC = _(Data).groupBy('c').mapValues(e => _.map(e, 'a')).value();
const AByD = _(Data).groupBy('d').mapValues(e => _.map(e, 'a')).value();

const _ = require('lodash');

const Data = require('./data');

const Groups = _(Data)
    .groupBy('b')
    .mapValues(e => _.map(e, 'a'))
    .value();

console.log(Groups);

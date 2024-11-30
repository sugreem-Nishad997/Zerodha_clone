const {model} = require('mongoose');

const { PostionsSchema} = require('../schemas/PositionsSchema');

const Positionsmodel = new model('postion',PostionsSchema);

module.exports = {Positionsmodel};
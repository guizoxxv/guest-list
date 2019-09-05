const latinize = require('latinize');

exports.formatName = (name) => latinize(name).toLocaleLowerCase();
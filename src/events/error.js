const { error } = require('../util/logger');

exports.ready = async function (msg) {
  error(msg);
};

const { startChecker } = require('../services/statusChecker');
const { client } = require('../client/client');
const { log } = require('../util/logger');
const { botId } = require('../util/config');
exports.ready = async function () {
  //// LOG ////
  log('Ready!');

  //// PRESENCE ////
  client.user.setPresence({
    status: 'online'
  });

  //// INIT CHECKER ////
  await startChecker();
};

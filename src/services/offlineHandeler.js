const { $, cd } = require('zx');
const { join } = require('path');
const { client } = require('../client/client');
const { fileName } = require('../util/config');

// OFFLINE HELPER
async function offlineHelper() {
  client.user.setPresence({
    status: 'dnd',
    activities: [
      {
        name: `Hosting`,
        type: 'STREAMING'
      }
    ]
  });

  await startBot();
}

// START AND STOP BOT HOSTING
async function startBot() {
  cd(join(__dirname + '../../../' + 'container/dist'));
  await $`python3 ${fileName}`;
}

async function killBot() {
  $`pkill -f '${fileName}'`;
  client.user.setPresence({
    status: 'online'
  });
}

exports.offlineHelper = offlineHelper;
exports.killBot = killBot;

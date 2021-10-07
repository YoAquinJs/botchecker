const { targetId, guildId } = require('../util/config');
const { client } = require('../client/client');
const { error } = require('../util/logger');
const { offlineHelper } = require('./offlineHandeler');

let state = null;
let bot = null;

async function start() {
  // ADD USER TO CACHE
  const guild = await client.guilds.cache.find((guild) => guild.id === guildId);
  await guild.members.fetch(targetId);

  // CONFIG BOT
  bot = guild.members.cache.find((m) => m.id === targetId);

  // FIRST TIME
  statusChecker();
  setInterval(() => statusChecker(), 1000);
}

function statusChecker() {
  if (!bot) return;
  state = !!bot.presence;
  if (!state) {
    botOffline().then();
  }
}

async function botOffline() {
  error('Error: Bot offline');
  await offlineHelper();
}

exports.startChecker = start;
exports.statusChecker = statusChecker;

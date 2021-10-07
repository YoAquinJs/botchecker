const { targetId, guildId, interval, devId } = require('../util/config');
const { client } = require('../client/client');
const { error } = require('../util/logger');
const { offlineHelper } = require('./offlineHandeler');

let state = null;
let bot = null;
let dev = null;

async function start() {
  // ADD USER TO CACHE
  const guild = await client.guilds.cache.find((guild) => guild.id === guildId);
  await guild.members.fetch(targetId);
  await guild.members.fetch(devId);

  // CONFIG BOT
  bot = guild.members.cache.find((m) => m.id === targetId);
  dev = guild.members.cache.find((m) => m.id === devId);
  // FIRST TIME
  statusChecker();
  setInterval(() => statusChecker(), interval);
}

function statusChecker() {
  if (!bot) return null;
  state = !!bot.presence;
  if (!state) {
    botOffline().then();
  }
  return state;
}

async function botOffline() {
  error('Error: Bot offline');
  await dev.send('Bot offline');
  await offlineHelper();
}

exports.startChecker = start;
exports.statusChecker = statusChecker;

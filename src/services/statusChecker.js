const {
  targetChannelId,
  guildId,
  interval,
  devId,
  targetId,
  reactionEmoji
} = require('../util/config');
const { client } = require('../client/client');
const { error } = require('../util/logger');
const { offlineHelper } = require('./offlineHandeler');
const { filter } = require('../helper/reactionHelper');

let state = null;
let channel = null;
let dev = null;

async function start() {
  // ADD USER TO CACHE
  const guild = await client.guilds.cache.find((guild) => guild.id === guildId);
  await guild.channels.fetch(targetChannelId);
  await guild.members.fetch(targetId);
  await guild.members.fetch(devId);

  // CONFIG BOT
  channel = guild.channels.cache.find((channel) => channel.id === targetChannelId);
  dev = guild.members.cache.find((m) => m.id === devId);

  // FIRST TIME
  await statusChecker();
  setInterval(() => statusChecker(), interval);
}

async function statusChecker() {
  if (!channel) return null;
  const message = await channel.send('/awake');
  const time = 1000 * 30;
  message
    .awaitReactions({ filter, max: 1, time: time, errors: ['time'] })
    .then(() => {
      state = true;
    })
    .catch((collected) => {
      message.reply('Error Bot is Down');
      state = false;
      botOffline().then();
    });
  return state;
}

async function botOffline() {
  error('Error: Bot offline');
  await dev.send('Bot offline');
  await offlineHelper();
}

exports.startChecker = start;
exports.statusChecker = statusChecker;

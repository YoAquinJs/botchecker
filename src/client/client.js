const { Client, Intents } = require('discord.js');

// CREATE CLIENT
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES]
});

exports.client = client;

//// CLIENT ////
const { client } = require('./client/client');
const { token } = require('./util/config');

client.login(token).then(() => require('./helper/slashCommandsHelper'));

//// EVENTS ////
const { ready } = require('./events/ready');
const { interactionCreate } = require('./events/interactionCreate');

client.on('ready', async () => await ready());
client.on('error', async (error) => await ready(error));
client.on(
  'interactionCreate',
  async (interaction) => await interactionCreate(interaction)
);

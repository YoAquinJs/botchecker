const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('../util/config');
const { commands } = require('./commandsHelper');
const { log, error } = require('../util/logger');

// REGISTER SLASH COMMANDS
const rest = new REST({ version: '9' }).setToken(token);
const slashCommandsHelper = commands.map((command) => command.data.toJSON());
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), {
    body: slashCommandsHelper
  })
  .then(() => log('Successfully registered application commands.'))
  .catch(error);

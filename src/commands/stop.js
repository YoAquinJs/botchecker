const { SlashCommandBuilder } = require('@discordjs/builders');
const { killBot } = require('../services/offlineHandeler');

module.exports = {
  name: 'stop',
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stop the hosted bot'),
  async execute(interaction) {
    await killBot();
    await interaction.reply('Stopping hosted bot');
  }
};

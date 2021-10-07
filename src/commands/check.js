const { SlashCommandBuilder } = require('@discordjs/builders');
const { statusChecker } = require('../services/statusChecker');

module.exports = {
  name: 'check',
  data: new SlashCommandBuilder()
    .setName('check')
    .setDescription("Check bot 's status"),
  async execute(interaction) {
    await interaction.reply(
      'Bot is ' + statusChecker() ? 'Online!' : 'Offline: Starting Hosting Protocol'
    );
  }
};

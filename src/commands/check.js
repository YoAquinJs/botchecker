const { SlashCommandBuilder } = require('@discordjs/builders');
const { statusChecker } = require('../services/statusChecker');

module.exports = {
  name: 'check',
  data: new SlashCommandBuilder()
    .setName('check')
    .setDescription("Check bot 's status"),
  async execute(interaction) {
    statusChecker();
    await interaction.reply('checker.check()');
  }
};

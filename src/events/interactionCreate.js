exports.interactionCreate = async function (interaction) {
  const { commands } = require('../helper/commandsHelper');
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  await commands.find((file) => (file.name = commandName)).execute(interaction);
};

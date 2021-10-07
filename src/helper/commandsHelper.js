const { readdirSync } = require('fs');
const path = require('path');

// GET COMMANDS FILES
const commands = [];
const commandsDir = path.join(__dirname + `/../commands/`);
const files = readdirSync(commandsDir).filter((file) => file.endsWith('.js'));

// GET COMMANDS
files.forEach((file) => {
  const cmd = require(path.join(commandsDir + file));
  commands.push(cmd);
});

exports.commands = commands;

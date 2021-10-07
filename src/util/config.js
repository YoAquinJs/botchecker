require('dotenv').config();
const json = require('../../config.json');

module.exports.token = json.token || process.env.token;
module.exports.botId = json.botId || process.env.botId;
module.exports.guildId = json.guildId || process.env.guildId;
module.exports.targetId = json.targetId || process.env.targetId;
module.exports.fileName = json.fileName || process.env.fileName;

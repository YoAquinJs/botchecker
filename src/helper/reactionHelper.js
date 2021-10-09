const { targetId, reactionEmoji } = require('../util/config');

function filter(reaction, user) {
  return [reactionEmoji].includes(reaction.emoji.name) && user.id === targetId;
}

exports.filter = filter;

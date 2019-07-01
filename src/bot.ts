/// <reference path="./global.d.ts" />

import * as Discord from 'discord.io';

import logger from './utils/logger';
import auth from '../auth';

import helpCommand from './commands/help';
import rememberCommand from './commands/remember';

const bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});
bot.on('ready', evt => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', (user, userID, channelID, message, evt) => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  console.log(user, userID, channelID, message);
  if (message.substring(0, 1) === '!') {
    let args = message.substring(1).split(' ');
    const cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case 'ping':
        bot.sendMessage({
          to: channelID,
          message: 'Pong!',
        });
        break;
      case 'muia':
        bot.sendMessage({
          to: channelID,
          message: 'Ai que menina mais gostosinha ^^)',
        });
        break;
      case helpCommand.key:
        helpCommand.action({ channelID });
        break;
      case rememberCommand.key:
        rememberCommand.action({ channelID, args });
        break;
    }
  }
});

global.bot = bot;

// getEmails().then(console.log);

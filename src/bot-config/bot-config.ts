import logger from '../utils/logger';

import helpCommand from '../commands/help';
import rememberCommand from '../commands/remember';
import jokeCommand from '../commands/joke';

interface IOnMessageArgs {
  channelID: string;
  message: string;
  user: string;
  userID: string;
  args: any[];
}

interface IAvailableCommands {
  [key: string]: (commandArgs: IOnMessageArgs) => void | Promise<any>;
}

export const onReady = () => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(`${global.bot.username} - (${global.bot.id})`);
};

const availableCommands: IAvailableCommands = {
  [helpCommand.key]: helpCommand.action,
  [rememberCommand.key]: rememberCommand.action,
  [jokeCommand.key]: jokeCommand.actionAsync,
};

export const onMessage = (
  user: string,
  userID: string,
  channelID: string,
  message: string,
) => {
  if (message.substring(0, 1) === '!') {
    let args = message.substring(1).split(' ');
    const cmd = args[0];

    args = args.splice(1);

    if (Object.keys(availableCommands).some(value => value === cmd)) {
      const result = availableCommands[cmd]({
        user,
        userID,
        message,
        channelID,
        args,
      });
      if (typeof result === 'object') {
        result.then(console.log);
      }
    }
  }
};

import customText, { COLORS } from '../utils/customText';

interface IReminders {
  [key: string]: string;
}

const data: IReminders = {};

const action = ({ channelID, args }) => {
  switch (args[0]) {
    case 'set':
      const [, key, ...rest] = args;
      data[key] = rest.join(' ');
      global.bot.sendMessage({
        to: channelID,
        message: `Setted with ${args[1]} key!`,
      });
      break;
    case 'get':
      global.bot.sendMessage({
        to: channelID,
        message: customText(`
            [${args[1]}]
            ${data[args[1]]}
        `),
      });
      break;
    case 'list':
      global.bot.sendMessage({
        to: channelID,
        message: customText(
          `
        Available keys:
        [${Object.keys(data).join('][')}]
        `,
          COLORS.SOLARIZED_YELLOW,
        ),
      });
  }
};

export default {
  action,
  key: 'remember',
};

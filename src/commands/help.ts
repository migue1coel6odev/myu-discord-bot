import customText, { COLORS } from '../utils/customText';

const action = ({ channelID }) => {
  global.bot.sendMessage({
    to: channelID,
    message: customText(
      `Available commands:
        - !help: It presents this
        - !remember:
            OPTIONS:
                set:
                    [key]: key to be rembered
                get:
                    [key]: key
                list: returns a list of all available keys
      `,
      COLORS.SOLARIZED_CYAN,
    ),
  });
};

export default {
  action,
  key: 'help',
};

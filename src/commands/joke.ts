import axios from 'axios';
import customText, { COLORS } from '../utils/customText';

const availableJokeSites = [
  'https://official-joke-api.appspot.com/random_joke',
  'https://us-central1-kivson.cloudfunctions.net/charada-aleatoria',
];

interface IResponse {
  status: STATUS;
  error: string;
  pergunta: string;
  resposta: string;
}

enum STATUS {
  ERROR = 'error',
}

const actionAsync = async ({ channelID }) => {
  const joke = await axios
    .get<IResponse>(availableJokeSites[1], {
      headers: {
        accept: 'application/json',
      },
    })
    .catch((err: any) => {
      return {
        status: STATUS.ERROR,
        error: err,
      };
    });
  if (joke.status === STATUS.ERROR) {
    global.bot.sendMessage({
      to: channelID,
      message: customText(
        `An error has occured ${joke.error}`,
        COLORS.SOLARIZED_RED,
      ),
    });
  } else {
    global.bot.sendMessage({
      to: channelID,
      message: customText(`
          Q: ${joke.data.pergunta}



          A: ${joke.data.resposta}`),
    });
  }
};

export default {
  actionAsync,
  key: 'joke',
};

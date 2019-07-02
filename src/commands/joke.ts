import axios from 'axios';
import customText from '../utils/customText';

const availableJokeSites = [
  'https://official-joke-api.appspot.com/random_joke',
  'https://us-central1-kivson.cloudfunctions.net/charada-aleatoria',
];

const actionAsync = async ({ channelID }) => {
  const joke = await axios.get<any>(availableJokeSites[1], {
    headers: {
      accept: 'application/json',
    },
  });
  global.bot.sendMessage({
    to: channelID,
    message: customText(`
        Q: ${joke.data.pergunta}



        A: ${joke.data.resposta}`),
  });
};

export default {
  actionAsync,
  key: 'joke',
};

/// <reference path="./global.d.ts" />
import * as Discord from 'discord.io';

import auth from '../auth';
import { onMessage, onReady } from './bot-config/bot-config';

const bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});
bot.on('ready', onReady);
bot.on('message', onMessage);

global.bot = bot;

/// <reference path="types/helpers/discord.d.ts" />

declare module NodeJS {
  interface Global {
    bot: Discord.Client;
  }
}

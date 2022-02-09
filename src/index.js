const Discord = require("discord.js");
const cron = require("cron");
require('dotenv').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  let scheduledMessage = new cron.CronJob("05 42 * * * *", () => {
    
    const guild = client.guilds.cache.get(process.env.TIGER_SERV);
    const channel = guild.channels.cache.get(process.env.CHANNEL);
    channel.send(
      "<@" + process.env.ID_CLEMENT_B + ">, <@" + process.env.ID_AURORE + "> and <@" + process.env.ID_CLEMENT_I + ">, it is my job to make sure you do yours..."
    );
  });

  scheduledMessage.start();
});

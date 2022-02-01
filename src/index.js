const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const general_channel = client.channels.fetch('910961547185111043').then(channels => {
        channels.send("Hi this is my first msg don\'t be afraid...")});
  });


client.login('OTM4MTkxMTc0OTI4MzE0NDE4.Yfmsng.tS9D9KBhKs30UZLya4W1vuFeKZ8');
// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up a simple HTTP endpoint to check the bot status
app.get('/', (req, res) => {
  res.send('Discord Bot is online and running!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Initialize Discord bot
const bot = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// Login the bot with token from environment variables
bot.login(process.env.DISCORD_TOKEN);

// Set up bot event listeners
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

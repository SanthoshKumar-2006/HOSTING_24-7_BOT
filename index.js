// Import necessary modules
const Discord = require("discord.js");
const express = require("express");
const path = require("path");

// Create the bot and the Express app
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});
const app = express();

// Replace with your bot token from the Discord Developer Portal
const TOKEN = "MTMwNTQyMTQ1Mjk0MTQ1OTQ3Nw.Gucjmr._jk_por49aFfciamXbFVq7OYXhG_rg0gAr6Xvs"; // Replace with your bot token

// Serve the HTML file at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the Express server
app.listen(3000, () => {
  console.log("Express server is running on port 3000");
});

// Bot ready event
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Serving and Botting!", { type: Discord.ActivityType.Watching });
});

// Example command
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!hello") {
    message.channel.send(`Hello, ${message.author.username}!`);
  }
});

// Error handling for login issues
client.on("error", (error) => {
  console.error("Discord client encountered an error:", error);
});

// Log in to Discord with the bot token
client.login(TOKEN).catch((err) => console.error("Failed to login:", err));

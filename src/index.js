import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import pingCommand from "./commands/pingCommand.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildEmojisAndStickers,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("FUN");
  pingCommand(process.env.CLIENT_TOKEN, process.env.CLIENT_ID);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "joke") {
    msg.reply("Okay");
  }
});

client.on("interactionCreate", async (interaction) => {
  console.log("Received interaction");
  if (interaction.commandName === "ping") {
    await interaction.reply("pong!");
  }
  if (interaction.commandName === "echo") {
    try {
      const message = interaction.options.getString("message");
      await interaction.reply(`Echo: ${message}`);
    } catch (error) {}
  }
});

client.login(process.env.CLIENT_TOKEN);

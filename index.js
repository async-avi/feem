import "dotenv/config";
import Discord from "discord.js";

const app = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
  ],
});

app.on("ready", () => {
  console.log(`Logged in as ${app.user.tag}!`);
});

app.on("message", (msg) => {
  if (msg == "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

app.login(process.env.CLIENT_TOKEN);

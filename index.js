import "dotenv/config";
import Discord from "discord.js";
import axios from "axios";

const app = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});

app.on("ready", () => {
  console.log(`Logged in as ${app.user.tag}!`);
});

app.on("messageCreate", async (msg) => {
  if (msg.content === "/joke") {
    const joke = await axios.get(
      "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw&type=single"
    );
    const data = await joke.data;
    console.log(data);
    msg.reply(`${data.joke}`);
  }
});

app.login(process.env.CLIENT_TOKEN);

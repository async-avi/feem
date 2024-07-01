import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import slashRegister from "./src/registerSlash.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", async () => {
  await slashRegister();
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (interaction.commandName === "boop") {
    await interaction.reply("Booped! :smile_cat:");
  } else if (interaction.commandName === "joke") {
    const joke = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    ).then((res) => res.json());
    await interaction.reply(joke.setup + "\n" + joke.punchline);
  }
});

client.login(process.env.CLIENT_TOKEN);

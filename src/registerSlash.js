import { REST, Routes } from "discord.js";
import "dotenv/config";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "boop",
    description: "Boops the bot!",
  },
  {
    name: "joke",
    description: "Tells a joke!",
    options: [
      {
        name: "category",
        description: "The category of the joke.",
        type: 3,
        required: false,
        choices: [
          { name: "Programming", value: "programming" },
          { name: "Funny", value: "funny" },
        ],
      },
    ],
  },
];
export default async function slashRegister() {
  const rest = new REST({ version: "10" }).setToken(process.env.CLIENT_TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.BOT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

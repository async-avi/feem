import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "echo",
    description: "Repeats the input.",
    options: [
      {
        name: "message",
        description: "The message to echo.",
        type: 3,
        required: true,
      },
    ],
  },
];

export default async function pingCommand(token, clientId) {
  const rest = new REST({ version: "10" }).setToken(token);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

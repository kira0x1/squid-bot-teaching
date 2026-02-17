import { REST, Routes } from "discord.js";
import ping from "./commands/ping";

// Construct and prepare an instance of the REST module
const token = process.env.TOKEN as string;
const rest = new REST().setToken(token);
const commands = [ping.data.toJSON()]

// and deploy your commands!
async function deploy() {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data: any = await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID as string, process.env.GUILD_ID as string), { body: commands });

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
}

deploy()
import { Client, Collection, CommandInteraction, Events, GatewayIntentBits, SlashCommandBuilder } from "discord.js";
import ping from "./commands/ping";
const client = new Client({ intents: [GatewayIntentBits.GuildMessages] })

export interface Command {
    data: any,
    execute: (interaction: CommandInteraction) => {};
}

const commands: Collection<string, Command> = new Collection()
commands.set("ping", ping)



client.once("clientReady", () => {
    console.log(`meow! ${client.user?.displayName} online!`)
})


client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(`user command: ${interaction.commandName}`)

    const command = commands.get(interaction.commandName)

    if (!command) {
        console.log(`command "${interaction.commandName}" not found`)
        return
    }


    command.execute(interaction)
})


client.login(process.env.TOKEN)
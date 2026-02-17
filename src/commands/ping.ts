import { CommandInteraction, InteractionResponse, SlashCommandBuilder, type Interaction } from "discord.js";
import type { Command } from "..";

const ping: Command = {
    data: new SlashCommandBuilder().setName("ping").setDescription('Provides information about the user.'),

    async execute(interaction: CommandInteraction) {
        await interaction.reply("MEOW!~ 🐈")
    }
}

export default ping
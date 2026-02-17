import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.GuildMessages] })

client.once("clientReady", () => {
    console.log(`meow! ${client.user?.displayName} online!`)
})

client.login(process.env.TOKEN)
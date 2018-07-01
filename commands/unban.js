const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
const DiscordTools = require('discordtools');
const tools = new DiscordTools(process.env.TOKEN);
 
tools.unban(message.guild.id, args[0]).then(b => {
    console.log(b);
});
}
module.exports.help = {
  name: "gldc"
}

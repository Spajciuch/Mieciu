const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
const DiscordTools = require('discordtools');
const tools = new DiscordTools(process.env.TOKEN);
 
tools.unban(message.guild.id, args[0]).then(b => {
    message.channel.send(`Odbanowano ${b.user.tag}`)
});
}
module.exports.help = {
  name: "unban"
}

const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Nie masz uprawnień");
    message.channel.setTopic(args.join(" "))
  .then(updated =>
    message.channel.send(`Nowy temat kanału ${message.channel.name} [${message.guild.name}] to ${updated.topic}`))
  .catch(console.error);
}
module.exports.help = {
	name: "settopic",
	category:"admin"
}
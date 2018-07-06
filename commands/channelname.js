
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>
{
  if(!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.reply("Nie masz uprawnień")
  message.channel.setName(args.join(" "))
 .catch(console.error);
}
module.exports.help = {
  name: "set.channel.name",
  category:"admin"
}

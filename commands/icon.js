
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
return message.reply("Nie masz uprawnień")
message.guild.setIcon(args.join(" "))
.catch(console.error);
}
module.exports.help = {
  name: "set.icon",
  category:"admin"
}

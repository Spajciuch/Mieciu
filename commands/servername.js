
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
return message.reply("Nie masz uprawnień")
  message.guild.setName(args.join(" "))
 .then(g => message.channel.send(`Zmieniono nazwę serwera ${g}`))
 .catch(console.error);
}
module.exports.help = {
  name: "set.server.name",
  category:"admin"
}

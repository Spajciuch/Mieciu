
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
  if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
  return message.reply("Nie masz uprawnień")
  message.guild.createRole({
    name: args.join(" "),
    permissions: 0
  })
}
module.exports.help = {
  name: "create.role"
}

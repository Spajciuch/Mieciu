const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
   if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
      return message.reply("Nie masz uprawnień")
    return message.reply("Nie masz uprawnień")
    message.guild.createEmoji(args[0], args[1]) .then(emoji => console.log(`Utworzono nowe emoji na serwerze ${message.guild.name} o nazwie: ${emoji.name}`)) .catch(console.error);
}
module.exports.help = {
  name: "emojicreate",
  category: "util"
}

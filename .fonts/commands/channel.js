
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
return message.reply("Nie masz uprawnień")
message.guild.createChannel(args.join(" ").split(" | ")[0], args.join(" ").split(" | ")[1], [{
  id: message.guild.id,
  deny: ['MANAGE_MESSAGES'],
  allow: ['SEND_MESSAGES']
}])
  .catch(console.error);
}
module.exports.help = {
  name: "prune",
  category: "util"
}

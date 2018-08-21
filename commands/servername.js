
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
	var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
return message.reply("Nie masz uprawnień")
  message.guild.setName(args.join(" "))
 .then(g => message.channel.send(`Zmieniono nazwę serwera ${g}`))
 .catch(console.error);
})
}
module.exports.help = {
  name: "ssname",
  category:"admin",
  description:"Zmienia nazwę serwera",
  use:"<prefix>ssname <nazwa>"
}

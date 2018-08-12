
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
	var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")
  message.guild.ban(args.join(" "))
  .then(user => message.channel.send(`Zbanowano ${user.username || user.id || user} na serwerze ${message.guild}`))
  .catch(console.error);
})
}
module.exports.help = {
  name: "id.ban",
  category:"admin"
}

const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")
    let member = message.mentions.members.first();
  if(!member)
    return message.reply("Oznacz osobę do zbanowania");
  if(!member.bannable)
    return message.reply("Nie mogę go zbanować, przesuń moją rolę na samą górę i upewnij się, że mam wszystkie uprawnienia");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = " `Nie podano powodu`";

  await member.ban(reason)
  const embed = {
    "title": "Ban",
    "description": `Osoba: ${member.user.username}\nZbanowano przez: ${message.author.username}\nPowód: ${reason}`,
    "color": 43519,
    "timestamp": "",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/423196130508275716/65a17d5274f3db851ef9ab5f3ed13ea1.jpg?size=2048",
      "text": "Mieciu"
    },
  };

  message.channel.send({ embed })
})
}
module.exports.help = {
	name: "ban",
  category:"admin",
  description:"Banuje osobę, którą oznaczysz",
  use:"<prefix>ban <oznacz osobę>"
}
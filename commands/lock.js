const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Nie masz uprawnień");
var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async util => {
    if(util.val() == false) return message.reply('Komenda jest wyłączona');
    let everyone = message.guild.roles.find(`name`, "@everyone");
      await message.channel.overwritePermissions(everyone, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
  
               });
      message.reply("Kanał został zablokowany")
      message.react("🚦")
})
}
module.exports.help = {
	name: "lock",
	category:"admin",
  description:"Blokuje kanał",
  use:"<prefix>lock"
}
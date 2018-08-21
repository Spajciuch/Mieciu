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
     message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(everyone, {
                 CREATE_INSTANT_INVITE:true
 			});
  });
      message.reply("odblokowano możliwość tworzenia zaproszeń")
      message.react("🚦")
})
}
module.exports.help = {
	name: "public",
	category:"admin",
	description:"Umożliwia tworzenie zaproszeń",
  	use:"<prefix>public"
}
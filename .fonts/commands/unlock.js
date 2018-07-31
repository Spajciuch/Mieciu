const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async util => {
    if(util.val() == false) return message.reply('Komenda jest wyłączona');
    let everyone = message.guild.roles.find(`name`, "@everyone");
      await message.channel.overwritePermissions(everyone, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
  
               });
      message.reply("Kanał został odblokowany")
      message.react("🚦")
})
}
module.exports.help = {
	name: "unlock",
	category:"admin"
}
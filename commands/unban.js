const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
const DiscordTools = require('discordtools');
const tools = new DiscordTools(process.env.TOKEN);
 
tools.unban(message.guild.id, args[0]).then(b => {
    message.channel.send(`Odbanowano ${b.user.tag}`)
});
})
}
module.exports.help = {
  name: "unban",
  category:"admin",
  description:"POdbanowywuje osobę po ID",
  use:"<prefix>unban <ID>"
}
